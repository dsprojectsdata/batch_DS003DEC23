import { useRef, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";


const SignUp = () => {

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: ""
    });
    // const inputNameRef = useRef();

    const handleRegister = (event) => {
        event.preventDefault();
        console.log("Am I running");
        console.log("Form Data >> ", formData);
        // console.log("Name input >>", inputNameRef.current.value)
        // inputNameRef.current.value = "1231456"
    }

    return (
        <>
            <Container>
                <Form style={{ padding: "40px 0" }} onSubmit={handleRegister}>
                    <h1 style={{ padding: "16px 0" }}>Sign Up</h1>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(event) => setFormData({...formData, password: event.target.value})}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default SignUp;