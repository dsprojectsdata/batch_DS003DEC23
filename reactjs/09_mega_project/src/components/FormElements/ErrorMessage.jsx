import React from 'react'

const ErrorMessage = ({ error }) => {
    console.log("error >>", error)
    return (
        <>
            {error && <p style={{ color: "red", marginTop: 4 }}>{error.message}</p>}
        </>
    )
}

export default ErrorMessage