import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const UseEffectHook2 = () => {

    const [count1, setCount1] = useState(20);
    const [count2, setCount2] = useState(20);
    const [count3, setCount3] = useState(20);

    const incrementCount1 = () => {
        setCount1(count1 + 1)
    }

    const incrementCount2 = () => {
        setCount2(count2 + 1);
    }

    
    useEffect(() => {
        console.log("AM I rendering in console")
    }, [count2, count3])

    return (
        <>
            <h3>Count1 : {count1}</h3>
            <Button onClick={incrementCount1}>Increment Count 1</Button>
            
            <hr />
            
            <h3>Count2: {count2}</h3>
            <Button onClick={incrementCount2}>Increment Count 2</Button>
        </>
    )
}

export default UseEffectHook2;