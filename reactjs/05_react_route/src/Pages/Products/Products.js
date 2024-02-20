import { useState, useEffect } from "react"
import axios from "axios"
import { Container, Card } from "react-bootstrap"
import ProductCard from "../../Component/ProductCard/ProductCard";

const Products = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("response >>", response.data)
        setProducts(response.data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <Container style={{ padding: "40px 0" }}>
                <h1>All Products</h1>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
                    {products.map((product) => <ProductCard product={product} />)}
                </div>
            </Container>
        </>
    )
}

export default Products;