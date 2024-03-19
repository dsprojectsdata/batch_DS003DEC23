import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { BLOG_IMG } from '../../components/Images'
import BlogCard from '../../components/BlogCard'
import axiosInstance from "../../services/instance"
import { FETCH_ALL_BLOGS } from "../../constants"

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const response = await axiosInstance.get(FETCH_ALL_BLOGS);
            console.log("response >>", response);
            setBlogs(response.data.data);
        } catch (error) {
            // {TASK} ERROR MESSAGE
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, []);
    
    return (
        <section className='Blog py-5' id='Blog'>
            <div className='container'>
                <h1 className='fw-bold text-center pb-4' style={{ fontSize: '50px' }}>All Blog</h1>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center" }}>
                    
                    {blogs.map((blog) => <BlogCard blog={blog} />)}
                        
                    {/* <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard /> */}
                </div>
                {/* <div className='row'>
                    <div className='col-lg-4'>
                        <Card>
                            <Card.Img variant="top" src={BLOG_IMG} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4'>
                        <Card>
                            <Card.Img variant="top" src={BLOG_IMG} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4'>
                        <Card>
                            <Card.Img variant="top" src={BLOG_IMG} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <Card>
                            <Card.Img variant="top" src={BLOG_IMG} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <Card>
                            <Card.Img variant="top" src={BLOG_IMG} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-lg-4 mt-4'>
                        <Card>
                            <Card.Img variant="top" src={BLOG_IMG} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary rounded-0" className='px-4 py-2'>Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div> */}
                <div className='text-center'><Button variant="primary" className='px-5 mt-5' size="lg">Load More</Button></div>
            </div>
        </section>
    )
}

export default Blogs