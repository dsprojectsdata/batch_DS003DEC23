import React from 'react'
import { Form } from 'react-bootstrap'
import Input from '../../components/FormElements/Input'
import SubmitBtn from '../../components/FormElements/SubmitBtn'

const EditCategory = () => {
    return (
        <Form className='mt-4'>
            <Input
                label="Title"
            />

            <SubmitBtn>Update</SubmitBtn>
        </Form>
    )
}

export default EditCategory