import React from 'react'
import { Button, Spinner } from "react-bootstrap"

const FormButton = ({ title = "Submit", loading = false }) => {
    return (
        <Button variant="danger" type="submit" disabled={loading}>
            {title}
            {loading && <Spinner animation="border" role="status" style={{ width: "16px", height: "16px" }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
        </Button>
    )
}

export default FormButton