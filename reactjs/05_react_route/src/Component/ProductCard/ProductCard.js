import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {



    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    {/* <Card.Link href="#">Show Details</Card.Link> */}
                    <Link to={`/product-detail/${product.id}`}>Show Details</Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductCard;