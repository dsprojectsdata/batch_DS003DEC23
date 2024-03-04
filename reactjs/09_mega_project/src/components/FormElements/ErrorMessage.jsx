import React from 'react'

const ErrorMessage = ({ error }) => {
    console.log("error >>", error)
    return (
        <>
            {error && <p style={{ color: "darkred" }}>{error.message}</p>}
        </>
    )
}

export default ErrorMessage