import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const UseEffectHook1 = () => {

    const [products, setProducts] = useState([]);

    const getProducts = () => {

        fetch("https://dummyjson.com/productssearch?q=iPhone")
        .then((response) => {
            console.log("response >>", response);
            return response.json();
        }).then((data) => {
            console.log("data >>", data.products);
            setProducts(data.products);
        })
    }

    // getProducts();

    useEffect(() => {
        console.log("On First Render");
        getProducts();
    }, [])

    return (
        <>
            <Container style={ { padding: "40px 0" } }>
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