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
    const [previewURL, setPreviewURL] = useState(null);

    const { handleSubmit, register, formState: { errors }, setValue, reset } = useForm();

    const getUserProfile = async () => {
        try {
            const response = await axiosInstance.get(GET_PROFILE);
            console.log("response>>", response)
            setProfileData(response.data.data)

            setValue("name", response.data.data.name)
        } catch (error) {
            console.log("error", error)
        }
    }

    const updateProfile = async (data) => {
        setIsSubmitting(true);
        try {
            console.log("data >>", data);
            const updateProfileData = {
                profile: data.profile[0],
                name: data.name
            }

            data.password !== "" && (updateProfileData.password = data.password)

            const response = await axiosInstance.post(UPDATE_PROFILE, updateProfileData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            reset();
        } catch (error) {
            console.log("error >>", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleProfileChange = (e) => {
        console.log("profile changed >>>", e.target.files)
        const generatePreviewURL = URL.createObjectURL(e.target.files[0])
        setPreviewURL(generatePreviewURL);
        // console.log("generatePreviewURL >>", generatePreviewURL);
    }

    useEffect(() => {
        getUserProfile();
    }, [])

    return (
        <>
            <Container>
                <Row className='my-5'>
                    <Col xs={5} md={4}>
                        <Image src={
                            previewURL ? previewURL : (profileData?.avatar !== "" ? `https://dsproject.in/mega-blog/${profileData?.avatar}` : DUMMY_IMG)
                        } roundedCircle width={"100%"} />

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
                                    // onChange={handleProfileChange}
                                    {...register("profile", {
                                        // required: REQUIRED_MSG
                                        onChange: handleProfileChange
                                    })}
                                />
                                <ErrorMessage error={errors.profile} />

                                <Input
                                    label="Full Name"
                                    // defaultValue={profileData?.name}
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
