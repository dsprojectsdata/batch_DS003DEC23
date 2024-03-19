import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Input from '../../components/FormElements/Input'
import SubmitBtn from '../../components/FormElements/SubmitBtn'
import Select from '../../components/FormElements/Select'
import axiosInstance from '../../services/instance'
import { ADD_BLOG, FETCH_CATEGORY, REQUIRED_MSG } from '../../constants'
import { useForm } from 'react-hook-form'
import { errorToast, successToast } from '../../components/ToastAlert'
import ErrorMessage from '../../components/FormElements/ErrorMessage';
import { Link } from 'react-router-dom';

const AddBlog = () => {

    // {TASK} FORM RESET

    const [categories, setCategories] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [blogContent, setBlogContent] = useState("");
    // const [blogContentError, setBlogContentError] = useState(false);

    const { handleSubmit, register, formState: { errors } } = useForm();

    console.log("errors >>", errors)

    const statusArr = [
        { title: "Active", value: "active" },
        { title: "Draft", value: "draft" }
    ];

    const handleAddBlog = async (data) => {
        setIsSubmitting(true);
        try {
            console.log("data >>", data);

            // blogContent === "" && setBlogContentError(true);

            const addBlogData = { ...data, content: blogContent, image: data.image[0] }
            // console.log("addBlogData >>", addBlogData);
            const response = await axiosInstance.post(ADD_BLOG, addBlogData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            successToast(response.data.message);
        } catch (error) {
            error.response && errorToast(error.response.data.message)
        } finally {
            setIsSubmitting(false);
        }

    }

    const fetchCategories = async () => {
        try {
            const response = await axiosInstance.post(FETCH_CATEGORY, {})
            // console.log(response.data.data.categories)
            const categoriesOptions = response.data.data.categories.map((category) => {
                return { title: category.name, value: category.id }
            })
            // console.log("categoriesOptions >>", categoriesOptions);
            setCategories(categoriesOptions);
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <Container>
            <div className='my-5'>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>Add New Blog</h1>
                    <Button>
                        <Link style={{ color: "white" }} to="/user-blog">All Blogs</Link>
                    </Button>
                </div>
                <Form onSubmit={handleSubmit(handleAddBlog)}>
                    <Row className='my-5'>
                        <Col md={7}>
                            <Input
                                label="Title"
                                {...register("title", {
                                    required: REQUIRED_MSG
                                })}
                            />
                            <ErrorMessage error={errors.title} />

                            <Select
                                label="Select Category"
                                options={categories}
                                {...register("category_id", {
                                    required: REQUIRED_MSG
                                })}
                            />
                            <ErrorMessage error={errors.category_id} />

                            <Input
                                label="Short Content"
                                {...register("short_content", {
                                    required: REQUIRED_MSG
                                })}
                            />
                            <ErrorMessage error={errors.short_content} />

                            {/* <Input
                                label="Content"
                                {...register("content", {
                                    required: REQUIRED_MSG
                                })}
                            /> */}

                            <div className='mt-4'>
                                <Form.Label className='fw-bold' style={{ fontSize: '20px' }}>
                                    Content
                                </Form.Label>
                                <ReactQuill
                                    theme="snow"
                                    style={{ height: "150px" }}
                                    onChange={(value) => setBlogContent(value)}
                                />
                            </div>
                            {/* {blogContentError && <p style={{ marginTop: "50px", marginBottom: 0, color: "red" }}>{REQUIRED_MSG}</p>} */}

                            <SubmitBtn isLoading={isSubmitting}>Submit</SubmitBtn>
                        </Col>
                        <Col md={5}>
                            <Input
                                label="Image"
                                type="file"
                                {...register("image", {
                                    required: REQUIRED_MSG
                                })}
                            />
                            <ErrorMessage error={errors.image} />

                            <Select
                                label="Select Status"
                                options={statusArr}
                                {...register("status", {
                                    required: REQUIRED_MSG
                                })}
                            />
                            <ErrorMessage error={errors.status} />
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
    )
}

export default AddBlog