import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

const UseEffectHook1 = () => {

    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState("");

    const getProducts = () => {

        fetch("https://dummyjson.com/products/"+selectedProductId)
        .then((response) => {
            console.log("response >>", response);
            return response.json();
        }).then((data) => {
            console.log("data >>", data);
            setProducts(selectedProductId === "" ? data.products : [data]);
        })
    }

    const handleSelectChange = (e) => {
        // console.log(e.target.value)
        setSelectedProductId(e.target.value);
    }

    // getProducts();

    useEffect(() => {
        console.log("On First Render");
        getProducts();
    }, [selectedProductId])

    return (
        <>
            <Container style={ { padding: "40px 0" } }>

                <div style={{ display: "flex", alignItems: "center", width: "30%", gap: 16, padding: "16px 0" }}>
                    Filter: 
                    <Form.Select aria-label="Default select example" onChange={handleSelectChange}>
                        <option>Select a product Id</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => <tr>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                        </tr>)}
                        {/* <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr> */}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default UseEffectHook1;