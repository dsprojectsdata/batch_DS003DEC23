import { useParams } from "react-router-dom"

const ProductDetails = () => {

    // const params = useParams();
    const { product_id, cart_id } = useParams();

    // console.log("params >>",params);

    return (
        <>
            <h1>This is a products details component</h1>
            <h4>Product Id is : {product_id}</h4>
            <h4>Cart Id is : {cart_id}</h4>
        </>
    )
}

export default ProductDetails;