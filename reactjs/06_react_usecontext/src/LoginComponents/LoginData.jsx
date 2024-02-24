import { useContext } from "react";
import LoginContext from "../UseContext/LoginContext";

const LoginData = () => {

    const {formData} = useContext(LoginContext)

    return (
        <>
            <p>Username is - <strong>{formData.username}</strong> and password is - <strong>{formData.password}</strong></p>
        </>
    )
}

export default LoginData;