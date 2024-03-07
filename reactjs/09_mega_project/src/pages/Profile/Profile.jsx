import React, { useEffect } from 'react'
import { Form, Button, Container, Row, Image, Col } from 'react-bootstrap';
import Input from '../../components/FormElements/Input';
import SubmitBtn from '../../components/FormElements/SubmitBtn';
import axiosInstance from '../../services/instance';
import { useSelector } from 'react-redux';

const Profile = () => {

    const userData = useSelector(state => state.auth.userData)

    const dummyImage = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D";

    const getUserProfile = () => {
        axiosInstance.get("user/get-profile", {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        })
    }

    useEffect(() => {
        getUserProfile();
    }, [])

    return (
        <>
            <Container>
                <Row className='my-5'>
                    <Col xs={5} md={4}>
                        <Image src={dummyImage} roundedCircle width={"100%"} />

                    </Col>
                    <Col md={1}></Col>
                    <Col xs={7} md={7}>
                        <div className='my-4'>
                            <h2>Welcome Nikhilesh Sharma</h2>
                            <p>Feel free to edit your information below</p>

                            <Form className='formbox' style={{ paddingTop: 24 }} >

                                <Form.Control type="file" className='mb-3' />

                                <Input
                                    label="Full Name"
                                />

                                <Input
                                    label="Email"
                                    type="email"
                                    disabled
                                />

                                <Input
                                    label="Password"
                                    type="password"
                                />

                                <div className='text-center'>
                                    <SubmitBtn>Upload</SubmitBtn>
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
