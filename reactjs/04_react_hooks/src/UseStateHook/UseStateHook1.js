import { useState } from "react";


const UseStateHook1 = () => {
    
    let count = 15;
    const [countNum, setCountNum] = useState(count);

    // console.log("countNum >>", countNum)


    const incrementCount = () => {
        // count = count + 1;
        setCountNum(countNum + 1)
        // console.log("count >>", count);
    }

    return (
        <>
            <h2>Count : {countNum}</h2>
            <button onClick={incrementCount}>Increment</button>
        </>
    )
}

export default UseStateHook1;