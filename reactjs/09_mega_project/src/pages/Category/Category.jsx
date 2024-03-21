import React, { useEffect, useState } from 'react'
import { Container, Form, Table, Button, Row, Col, Pagination } from 'react-bootstrap'
import Input from '../../components/FormElements/Input'
import SubmitBtn from '../../components/FormElements/SubmitBtn'
import { useForm } from 'react-hook-form'
import { ADD_CATEGORY, FETCH_CATEGORY, REQUIRED_MSG, DELETE_CATEGORY } from '../../constants'
import ErrorMessage from '../../components/FormElements/ErrorMessage'
import { errorToast, successToast } from '../../components/ToastAlert'
import axiosInstance from '../../services/instance'
import EditCategory from './EditCategory'
import AddCategory from './AddCategory'
import SitePagination from '../../components/SitePagination'

const Category = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [categories, setCategories] = useState([]);
    const [totalCategories, setTotalCategories] = useState(0);
    const [currPage, setCurrPage] = useState(1);

    const [isEditFormVisible, setIsEditFormVisible] = useState(false);
    const [currentEditCategory, setCurrentEditCategory] = useState(null);

    const DATA_PER_PAGE = 10;

    const handleCateAdd = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await axiosInstance.post(ADD_CATEGORY, data)
            // console.log("response: ", response.data.message)
            successToast(response.data.message)
            // reset();
            fetchCategories();
        } catch (error) {
            errorToast(error.response.data.message)
        } finally {
            setIsSubmitting(false);
        }
    }

    const fetchCategories = async (pageNo) => {
        try {
            const data = {
                curr_page: pageNo,
                data_per_page: DATA_PER_PAGE
            }
            const response = await axiosInstance.post(FETCH_CATEGORY, data)
            setCategories(response.data.data.categories)
            setTotalCategories(response.data.data.total)
            setCurrPage(pageNo)
        } catch (error) {
            error.response && errorToast(error.response.data.message)
        }
    }
    
    const handlePagination = async (pageNo) => {
        await fetchCategories(pageNo);
    }

    const deleteCategory = async (cateId) => {
        try {
            const response = await axiosInstance.delete(`${DELETE_CATEGORY}/${cateId}`)
            fetchCategories();
            successToast(response.data.message)
        } catch (error) {
            error.response && errorToast(error.response.data.message)
        }
    }

    const handleCateEdit = (cateObject) => {
        setCurrentEditCategory(cateObject)
        setIsEditFormVisible(true);
    }

    useEffect(() => {
        fetchCategories(currPage);
    }, [])

    return (
        <Container>
            <div className='my-5'>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>Blog Categories</h1>
                </div>

                <Row>
                    <Col md={6}>
                        {!isEditFormVisible ?
                            <AddCategory
                                handleCateAdd={handleCateAdd}
                                isSubmitting={isSubmitting}
                            />
                            : <EditCategory
                                setIsEditFormVisible={setIsEditFormVisible}
                                cateData={currentEditCategory}
                                fetchCategories={fetchCategories}
                            />}

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
                                {categories.map((category, index) => <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{category.name}</td>
                                    <td>
                                        <div style={{ display: "flex", gap: 12 }}>
                                            <Button
                                                onClick={() => handleCateEdit(category)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant='danger'
                                                onClick={() => deleteCategory(category.id)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>)}
                            </tbody>
                        </Table>

                        <SitePagination
                            totalData={totalCategories}
                            dataPerPage={DATA_PER_PAGE}
                            currPage={currPage}
                            handlePagination={handlePagination}
                        />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Category