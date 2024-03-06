import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

const SubmitBtn = ({ isLoading, variant = "primary", children }) => {
    return (
        <>
            <Button
                type="submit"
                variant={variant}
                className='px-5 mt-5'
                size="lg"
                disabled={isLoading}
            >
                {children}
                {isLoading && <Spinner style={{ marginLeft: 8, fontSize: 16, width: 16, height: 16 }} animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
            </Button>
        </>
    )
}

export default SubmitBtn