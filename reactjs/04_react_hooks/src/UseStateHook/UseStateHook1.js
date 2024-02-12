import { useState } from "react";


const UseStateHook1 = () => {
    
    const [countNum, setCountNum] = useState(15);

    return (
        <>
            <h2>Count : {countNum}</h2>
            <button onClick={() => setCountNum(countNum + 1)}>Increment</button>
            <button onClick={() => setCountNum(countNum - 1)}>Decrement</button>
        </>
    )
}

export default UseStateHook1;