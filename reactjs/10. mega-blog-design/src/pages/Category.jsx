import React from 'react'
import { Container, Form, Table, Button, Pagination, Row, Col } from 'react-bootstrap'

const Category = () => {
    return (
        <Container>
            <div className='my-5'>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>Blog Categories</h1>
                </div>
                <Row>
                    <Col md={6}>
                        <Form className='mt-4'>
                            <Input
                                label="Title"
                            />
                            <SubmitBtn>Add</SubmitBtn>
                        </Form>
                    </Col>

                    <Col md={6}>
                        <Table striped bordered hover className='mt-4 mb-4'>
                            <thead>
                                <tr>
                                    <th width="150">#</th>
                                    <th>Title</th>
                                    <th width="150">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Name</td>
                                    <td>
                                        <div style={{ display: "flex", gap: 12 }}>
                                            <Button>Edit</Button>
                                            <Button variant='danger'>Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Category