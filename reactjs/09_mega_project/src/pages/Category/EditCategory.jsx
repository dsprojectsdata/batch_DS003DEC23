import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import Input from '../../components/FormElements/Input'
import SubmitBtn from '../../components/FormElements/SubmitBtn'
import { useForm } from 'react-hook-form'
import { REQUIRED_MSG } from '../../constants'
import ErrorMessage from '../../components/FormElements/ErrorMessage'

const EditCategory = ({ setIsEditFormVisible, cateData }) => {

    console.log("cateData >>", cateData);

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const handleEditCate = () => {
        
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