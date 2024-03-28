import React, { useEffect, useState } from 'react'
import { Container, Image, Table } from 'react-bootstrap'
import axiosInstance from '../../services/instance'
import { FETCH_BLOGS } from '../../constants'

const UserBlogs = () => {

    // {TASK} BLOG EDIT and DELETE

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const response = await axiosInstance.get(FETCH_BLOGS)
            console.log("response >>", response);
            setBlogs(response.data.data);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, []);

    return (
        <Container>
            <div className='my-5'>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>All Blogs</h1>
                </div>

                <Table striped bordered hover className='mt-4 mb-4'>
                    <thead>
                        <tr>
                            <th width="150">#</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th width="150">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.length > 0 ? blogs.map((blog, index) => <tr key={index}>
                            <td>{index+1}</td>
                            <td>{blog.title}</td>
                            <td>{blog.short_content}</td>
                            <td><Image src={blog.image} width="100" /></td>
                            <td>{blog.status}</td>
                            <td></td>
                        </tr>) : <tr><td colSpan={6} style={{ textAlign: "center" }}>No Data Found</td></tr>}
                        
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default UserBlogs