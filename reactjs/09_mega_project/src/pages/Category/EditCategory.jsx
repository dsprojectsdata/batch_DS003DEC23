import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import Input from '../../components/FormElements/Input'
import SubmitBtn from '../../components/FormElements/SubmitBtn'
import { useForm } from 'react-hook-form'
import { REQUIRED_MSG, UPDATE_CATEGORY } from '../../constants'
import ErrorMessage from '../../components/FormElements/ErrorMessage'
import axiosInstance from '../../services/instance'
import { errorToast, successToast } from '../../components/ToastAlert'

const EditCategory = ({ setIsEditFormVisible, cateData, fetchCategories }) => {

    console.log("cateData >>", cateData);

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const handleEditCate = async (data) => {
        try {
            const response = await axiosInstance.post(`${UPDATE_CATEGORY}/${cateData.id}`, data);
            fetchCategories();
            setIsEditFormVisible(false);
            successToast(response.data.message)
        } catch (error) {
            errorToast(errorToast(error.response.data.message))
        }
    }

    useEffect(() => {
        setValue("name", cateData.name)
    }, [cateData])

    return (
        <Form className='mt-4' onSubmit={handleSubmit(handleEditCate)}>
            <Input
                label="Title"
                {...register("name", {
                    required: REQUIRED_MSG
                })}
            />
            <ErrorMessage error={errors.name} />

            <div>
                <SubmitBtn>Update</SubmitBtn>
                <Button
                    variant="danger"
                    className='px-5 mt-5'
                    size="lg"
                    onClick={() => setIsEditFormVisible(false)}
                >
                    Cancel
                </Button>
            </div>
        </Form>
    )
}

export default EditCategory