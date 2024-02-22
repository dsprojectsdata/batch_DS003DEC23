import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";


const Profile = () => {

    const [formData, setFormData] = useState({
        fullName: "Nikhilesh Sharma",
        email: "",
    });

    const handleRegister = (event) => {
        event.preventDefault();
        console.log("Form Data >>", formData)
    }

    return (
        <>
            <Container>
                <Form style={{ padding: "40px 0" }} onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={formData.fullName}
                            onChange={(e) => {
                                console.log("change Value >>", e.target.value);
                                setFormData({...formData, fullName: e.target.value})
                            }}
                        />
                        {/* Controlled Component */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {/* UnControlled Component */}
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Profile;

// Controlled vs UnControlled Component