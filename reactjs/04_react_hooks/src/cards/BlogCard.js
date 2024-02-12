import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BlogCard = ({ 
    title = "This is a default title", 
    description = "Some quick example text to build on the card title and make up the bulk of the card's content.",
    titleFn = (title) => {}
}) => {

    // console.log("props >>", props);

    const childTitle = "This is a child element title";

    titleFn(childTitle)

    return (
        <>
            <Card style={{ marginBottom: 16 }}>
                <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default BlogCard;