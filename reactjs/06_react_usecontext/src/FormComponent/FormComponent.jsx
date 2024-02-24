import React, { useState } from 'react'
import { FormUseContext } from '../UseContext/FormContext'

const FormComponent = () => {

    const { setUserData } = FormUseContext()

    // console.log("contextData >>", contextData)

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleFormData = () => {
        console.log("AM  I running >>", data);
        setUserData(data);
    }

    const handleEmailChange = (event) => {
        setData({...data, email: event.target.value})
    }

    const handlePasswordChange = (event) => {
        setData({...data, password: event.target.value})
    }

    return (
        <>
            <input
                type='email'
                placeholder='email'
                onChange={handleEmailChange}
            />
            <input
                type='password'
                placeholder='password'
                onChange={handlePasswordChange}
            />
            <button onClick={handleFormData}>Submit</button>
        </>
    )
}

export default FormComponent