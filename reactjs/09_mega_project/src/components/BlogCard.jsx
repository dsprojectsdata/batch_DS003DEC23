import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { BLOG_IMG } from './Images'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {

    console.log("blog >>", blog)

    return (
        <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={blog.image} />
            <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.short_content}</Card.Text>
                <Link to={`/blog-details/${blog.slug}`}>
                    <Button variant="primary rounded-0" className='px-4 py-2'>
                        Read More
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default BlogCard