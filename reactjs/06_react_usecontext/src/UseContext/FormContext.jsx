import { createContext, useContext, useState } from "react";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    return (
        <FormContext.Provider value={{ userData, setUserData }}>
            {children}
        </FormContext.Provider>
    )
}

const FormUseContext = () => useContext(FormContext);

export default FormContext;

export { FormContextProvider, FormUseContext }


// Todo List
// <Todo Form
// <ToDo show