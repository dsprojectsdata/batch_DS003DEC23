import { useRef } from "react";
import { Button } from "react-bootstrap";


const UseRefHook = () => {

    const inputRef = useRef();

    const handleClickBtn = () => {
        const inputValue = inputRef.current.value;
        inputRef.current.style.color = "red"
        // inputRef.current.focus();
        console.log("inputValue >>", inputRef.current.value);
    }

    return (
        <>
            <div style={{ padding: "16px 0" }}>
                <input ref={inputRef} />
            </div>
            <Button onClick={handleClickBtn}>Click Me</Button>
        </>
    )
}

export default UseRefHook;