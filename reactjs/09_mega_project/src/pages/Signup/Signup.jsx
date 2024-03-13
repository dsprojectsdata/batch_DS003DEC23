import React, { useRef, useState } from 'react'
import { Form, Button, Container, Spinner } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"

import Input from '../../components/FormElements/Input'
import ErrorMessage from '../../components/FormElements/ErrorMessage'
import { BASE_URL, REQUIRED_MSG, SIGNUP } from "../../constants"
import axiosInstance from '../../services/instance'
import SubmitBtn from '../../components/FormElements/SubmitBtn'
import { authLogin } from '../../redux/features/AuthSlice'
import { Link } from 'react-router-dom'
import { errorToast, successToast } from '../../components/ToastAlert'

const Signup = () => {

    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegister = async (data) => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.post(SIGNUP, data);
            // toast.success(response.data.message, {
            //     theme: "colored"
            // })
            successToast(response.data.message)
            dispatch(authLogin(response.data.data))
            
        } catch (error) {
            console.log("error", error);
            // toast.error(error.response.data.message, {
            //     theme: "colored"
            // })
            errorToast(error.response.data.message)
        } finally {
            setIsLoading(false);
        }
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
                            {...register("name", {
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
                            <SubmitBtn isLoading={isLoading}>Sign Up</SubmitBtn>
                        </div>

                        <div className='text-center mt-5'>
                            <p>
                                Already have an account? <Link to='/login' style={{ color: 'white' }}>Sign in</Link>
                            </p>
                        </div>

                    </Form>
                </Container>
            </section>
        </>
    )
}

export default Signup