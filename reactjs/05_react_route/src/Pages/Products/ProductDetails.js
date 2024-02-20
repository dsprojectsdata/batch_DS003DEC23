import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Image } from "react-bootstrap"
import axios from "axios";

const ProductDetails = () => {

    const [productDetail, setProductDetail] = useState(null);

    // const params = useParams();
    const { product_id } = useParams();

    const getProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${product_id}`)
        console.log("response >>", response)
        setProductDetail(response.data)
    }

    useEffect(() => {
        getProductDetails();
    }, [])

    return (
        <>
            <Container style={{ padding: "24px 0" }}>
                {productDetail && <>
                    <h1>{productDetail.title} (${productDetail.price})</h1>
                    <h6>{productDetail.category}</h6>
                    <Image src={productDetail.image} />
                    <p>{productDetail.description}</p>
                </>}
            </Container>
        </>
    )
}

export default ProductDetails;