import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Input from '../../components/FormElements/Input'
import SubmitBtn from '../../components/FormElements/SubmitBtn'
import { useForm } from 'react-hook-form'
import { LOGIN, REQUIRED_MSG } from '../../constants'
import ErrorMessage from '../../components/FormElements/ErrorMessage'
import { toast } from 'react-toastify'
import axiosInstance from '../../services/instance'
import { useDispatch } from 'react-redux'
import { authLogin } from '../../redux/features/AuthSlice'
import { successToast } from '../../components/ToastAlert'

const Login = () => {

    const [isLoading, setIsLoading] = useState(false);

    const { handleSubmit, register, formState: { errors } } = useForm();

    const dispatch = useDispatch();

    const handleLogin = async (data) => {
        setIsLoading(true);
        try {
            const response = await axiosInstance.post(LOGIN, data)
            console.log("response >>", response);
            successToast(response.data.message);
            dispatch(authLogin(response.data.data))
        } catch (error) {
            // console.log(error)
            errorToast(error.response.data.message)
        } finally{
            setIsLoading(false);
        }
    }

    return (
        <section className='login bg-dark py-5' id='login'>
            <div className='container'>
                <h1 className='fw-bold text-center text-white pb-5' style={{ fontSize: '40px' }}>Login</h1>
                <Form
                    className='formbox text-white'
                    style={{ width: '50%', margin: '0 auto' }}
                    onSubmit={handleSubmit(handleLogin)}
                >

                    <Input
                        label="Email"
                        {...register("email", {
                            required: REQUIRED_MSG
                        })}
                    />
                    <ErrorMessage error={errors.email} />

                    <Input
                        label="Password"
                        type="password"
                        {...register("password", {
                            required: REQUIRED_MSG
                        })}
                    />
                    <ErrorMessage error={errors.password} />

                    <div className='text-center'>
                        <SubmitBtn isLoading={isLoading}>Login</SubmitBtn>
                    </div>

                    <div className='text-center mt-5'><p>You don't have an account yet? <a href='#' style={{ color: 'white' }}>Sign up</a></p></div>
                </Form>
            </div>
        </section>
    )
}

export default Login