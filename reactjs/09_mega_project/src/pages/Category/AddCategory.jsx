import React from 'react'
import { Form } from 'react-bootstrap'
import Input from '../../components/FormElements/Input'
import ErrorMessage from '../../components/FormElements/ErrorMessage'
import SubmitBtn from '../../components/FormElements/SubmitBtn'
import { useForm } from 'react-hook-form'
import { REQUIRED_MSG } from '../../constants'

const AddCategory = ({ handleCateAdd, isSubmitting }) => {

    const { handleSubmit, register, formState: { errors } } = useForm();

    return (
        <Form className='mt-4' onSubmit={handleSubmit(handleCateAdd)}>
            <Input
                label="Title"
                {...register("name", {
                    required: REQUIRED_MSG
                })}
            />
            <ErrorMessage error={errors.name} />

            <SubmitBtn isLoading={isSubmitting}>Add</SubmitBtn>
        </Form>
    )
}

export default AddCategory