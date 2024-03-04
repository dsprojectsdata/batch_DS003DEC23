import React, { useRef, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import Input from '../../components/FormElements/Input'
import ErrorMessage from '../../components/FormElements/ErrorMessage'
// import { REQUIRED_MSG } from '../../constants/ErrorMessages'
// import { BASE_URL } from "../../constants/APIData"
import { BASE_URL, REQUIRED_MSG } from "../../constants"
import axiosInstance from '../../services/instance'

const Signup = () => {

    const ref = useRef()

    const { register, handleSubmit, formState: { errors } } = useForm()

    // console.log("errors >>", errors)
    console.log("process.env.LIVE_BASE_URL >>", process.env.REACT_APP_LIVE_BASE_URL)

    const handleRegister = (data) => {
        console.log(data)

        // axios.post("https://dsproject.in/mega-blog/api/v1/signup")
        // axios.post("https://dsproject.in/mega-blog/api/v1/login")

        // axiosInstance.post("signup")
        // axiosInstance.post("login")
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

                        <Input
                            label="Full Name"
                            {...register("fullName", {
                                required: REQUIRED_MSG,
                                maxLength: {
                                    value: 20,
                                    message: "Please enter at least 20 characters"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Please enter at least 2 characters"
                                }
                            })}
                        />
                        {/* {errors.fullName && <p style={{ color: "darkred" }}>{errors.fullName.message}</p>} */}
                        <ErrorMessage error={errors.fullName} />

                        <Input
                            label="Email"
                            type="email"
                            {...register("email", { required: REQUIRED_MSG })}
                        />
                        {/* {errors.email && <p style={{ color: "darkred" }}>{errors.email.message}</p>} */}
                        <ErrorMessage error={errors.email} />

                        <Input
                            label="Password"
                            type="password"
                            {...register("password", { required: REQUIRED_MSG })}
                        />
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