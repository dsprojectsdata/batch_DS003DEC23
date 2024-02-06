import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import BlogCard from "./BlogCard";

const Cards = () => {

    const title1 = "AI in world title";

    return (
        <>
            <Container>
                <h2>Blogs</h2>

                <Row>
                    <Col md={4}>
                        <BlogCard title={title1} />
                    </Col>
                    <Col md={4}>
                        <BlogCard title="React JS Course" />
                    </Col>
                    <Col md={4}>
                        <BlogCard title="This is Blog 3" />
                    </Col>
                    <Col md={4}>
                        <BlogCard title="This is Blog 4" />
                    </Col>
                    <Col md={4}>
                        <BlogCard title="This is Blog 5" />
                    </Col>
                    <Col md={4}>
                        <BlogCard />
                    </Col>

                </Row>

            </Container>
        </>
    )
}

export default Cards;