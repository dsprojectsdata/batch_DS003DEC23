import React, { useRef, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import Input from '../../components/FormElements/Input'
import ErrorMessage from '../../components/FormElements/ErrorMessage'

const Signup = () => {

    const ref = useRef()

    const { register, handleSubmit, formState: { errors } } = useForm()

    console.log("errors >>", errors)

    const requiredMsg = "This field is required";

    const handleRegister = (data) => {
        console.log(data)
    }

    return (
        <>
            <section className='login bg-dark py-5' id='login'>
                <Container>
                    <h1 className='fw-bold text-center text-white pb-5' style={{ fontSize: '40px' }}>Sign Up</h1>

                    <Form
                        onSubmit={handleSubmit(handleRegister)}
                        className='formbox text-white'
                        style={{ width: '50%', margin: '0 auto' }}
                    >

                        <Input label="Full Name" {...register("fullName", { required: requiredMsg })} />
                        {/* {errors.fullName && <p style={{ color: "darkred" }}>{errors.fullName.message}</p>} */}
                        <ErrorMessage error={errors.fullName} />

                        <Input label="Email" type="email" {...register("email", { required: requiredMsg })} />
                        {/* {errors.email && <p style={{ color: "darkred" }}>{errors.email.message}</p>} */}
                        <ErrorMessage error={errors.email} />

                        <Input label="Password" type="password" {...register("password", { required: requiredMsg })} />
                        <ErrorMessage error={errors.password} />

                        <div className='text-center'>
                            <Button type="submit" variant="primary" className='px-5 mt-5' size="lg">Sign Up</Button>
                        </div>

                        <div className='text-center mt-5'><p>You don't have an account yet? <a href='#' style={{ color: 'white' }}>Sign in</a></p></div>

                    </Form>
                </Container>
            </section>
        </>
    )
}

export default Signup