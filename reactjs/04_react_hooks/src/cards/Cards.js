import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import BlogCard from "./BlogCard";
import React from "react";

const Cards = () => {

    const title1 = "AI in world title";

    const desData = {
        des1: "1. Some quick example text to build on the card title and make up the bulk of the card's content.",
        des2: "2. Some quick example text to build on the card title and make up the bulk of the card's content.",
        des3: "3. Some quick example text to build on the card title and make up the bulk of the card's content.",
    }

    const getTitle = (title) => {
        console.log("title >>", title);
    }

    return (
        <>
            <Container>
                <h2>Blogs</h2>

                <Row>
                    <Col md={4}>
                        <BlogCard title={title1} description={desData.des1} titleFn={getTitle} />
                    </Col>
                    <Col md={4}>
                        <BlogCard title="React JS Course" description={desData.des2} />
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