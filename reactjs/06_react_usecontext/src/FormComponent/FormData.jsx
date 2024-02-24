import React from 'react'
import { FormUseContext } from '../UseContext/FormContext'

const FormData = () => {

    const { userData } = FormUseContext()

    return (
        <>
            <h2>Form Data is - </h2>
            <p>Email is :- {userData.email} </p>
            <p>Password is :- {userData.password}</p>
        </>
    )
}

export default FormData