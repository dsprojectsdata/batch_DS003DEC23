import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row, Image, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form"

import Input from '../../components/FormElements/Input';
import SubmitBtn from '../../components/FormElements/SubmitBtn';
import axiosInstance from '../../services/instance';
import { useSelector } from 'react-redux';
import { GET_PROFILE, DUMMY_IMG, REQUIRED_MSG, UPDATE_PROFILE } from '../../constants';
import ErrorMessage from '../../components/FormElements/ErrorMessage';

const Profile = () => {

    const [profileData, setProfileData] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { handleSubmit, register, formState: { errors } } = useForm();

    const getUserProfile = async () => {
        try {
            const response = await axiosInstance.get(GET_PROFILE);
            console.log("response>>", response)
            setProfileData(response.data.data)
        } catch (error) {
            console.log("error", error)
        }
    }

    const updateProfile = async (data) => {
        setIsSubmitting(true);
        try {
            console.log("data >>", data);
            const updateProfileData = {
                profile: data.profile[0]
            }

            const response = await axiosInstance.post(UPDATE_PROFILE, updateProfileData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        } catch (error) {
            console.log("error >>", error)
        } finally{
            setIsSubmitting(false)
        }
    }

    useEffect(() => {
        getUserProfile();
    }, [])

    return (
        <>
            <Container>
                <Row className='my-5'>
                    <Col xs={5} md={4}>
                        <Image src={profileData?.avatar !== "" ? `https://dsproject.in/mega-blog/${profileData?.avatar}` : DUMMY_IMG} roundedCircle width={"100%"} />

                    </Col>
                    <Col md={1}></Col>
                    <Col xs={7} md={7}>
                        <div className='my-4'>
                            <h2>Welcome {profileData?.name}</h2>
                            <p>Feel free to edit your information below</p>

                            <Form
                                className='formbox'
                                style={{ paddingTop: 24 }}
                                onSubmit={handleSubmit(updateProfile)}
                            >

                                <Form.Control
                                    type="file"
                                    className='mb-3'
                                    {...register("profile", {
                                        required: REQUIRED_MSG
                                    })}
                                />
                                <ErrorMessage error={errors.profile} />

                                <Input
                                    label="Full Name"
                                    defaultValue={profileData?.name}
                                    {...register("name", {
                                        // required: REQUIRED_MSG
                                    })}
                                />
                                <ErrorMessage error={errors.name} />

                                <Input
                                    label="Email"
                                    type="email"
                                    disabled
                                    defaultValue={profileData?.email}
                                />

                                <Input
                                    label="Password"
                                    type="password"
                                    {...register("password")}
                                />

                                <div className='text-center'>
                                    <SubmitBtn isLoading={isSubmitting}>Update</SubmitBtn>
                                </div>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile

// Login API
// axios interceptors
