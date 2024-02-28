import React, { useState } from 'react'
import { Container, Form, Button, Spinner } from "react-bootstrap"

import axios from "axios";
import FormButton from './FormButton';

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [errorName, setErrorName] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorName("")
        setIsLoading(true);
        try {
            const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", formData)
            // Redirect to profile page
        } catch (error) {
            console.log("error >>", error);
            setErrorName(error.response.data.message)
        } finally {
            setIsLoading(false);
        }


    }

    return (
        <Container>
            <div style={style}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            type="text"
                            placeholder="Enter username"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </Form.Group>

                    {errorName && <p style={{ fontSize: 16, color: "darkred" }}>{errorName}</p>}

                    <FormButton title="Login" loading={isLoading} />

                    {/* <Button variant="primary" type="submit" disabled={isLoading}>
                        Submit
                        {isLoading && <Spinner animation="border" role="status" style={{ width: "16px", height: "16px" }}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>}
                    </Button> */}

                </Form>
            </div>
        </Container>
    )
}

export default Login



const style = {
    padding: "24px",
    borderRadius: "20px",
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
};