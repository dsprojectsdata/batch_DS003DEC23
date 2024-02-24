import { useContext } from "react";
import UserContext from "../UseContext/UserContext";

const Component5 = () => {

    const userData = useContext(UserContext);

    // console.log("contextData", contextData)

    return (
        <>
            <h4>Username is - {userData.username}</h4>
        </>
    )
}

export default Component5;