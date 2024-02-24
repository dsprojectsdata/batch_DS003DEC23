import { useContext } from "react";
import LoginContext from "../UseContext/LoginContext";

const LoginForm = () => {

    const { formData, setFormData } = useContext(LoginContext);

    // console.log("loginContextData >>", loginContextData)

    return (
        <>
            <div>
                <input
                    onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                    placeholder="username"
                />
            </div>
            <div>
                <input
                    onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                    placeholder="password"
                />
            </div>
        </>
    )
}

export default LoginForm;