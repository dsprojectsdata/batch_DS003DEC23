import React from 'react'

const ErrorMessage = ({ error }) => {
    
    return (
        <>
            {error && <p style={{ color: "red", marginTop: 4 }}>{error.message}</p>}
        </>
    )
}

export default ErrorMessage