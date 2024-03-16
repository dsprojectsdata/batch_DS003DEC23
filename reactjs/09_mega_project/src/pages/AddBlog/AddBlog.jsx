import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Input from '../../components/FormElements/Input'
import SubmitBtn from '../../components/FormElements/SubmitBtn'

const AddBlog = () => {
    return (
        <Container>
            <div className='my-5'>
                <h1>Add New Blog</h1>
                <Form>
                    <Row className='my-5'>
                        <Col md={7}>
                            <Input
                                label="Title"
                            />

                            <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Select Category</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Category</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>

                            <Input
                                label="Short Content"
                            />

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

                            <SubmitBtn>Submit</SubmitBtn>
                        </Col>
                        <Col md={5}>
                            <Input
                                label="Image"
                                type="file"
                            />
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    )
}

export default AddBlog