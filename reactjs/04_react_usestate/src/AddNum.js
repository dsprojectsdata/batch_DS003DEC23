import { useState } from "react";


const AddNum = () => {

    console.log("AM I rendering again??");

    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [result, setResult] = useState(0);
    
    const addTwoNumbers = () => {
        setResult(input1 + input2)
    }

    const handleInput1Change = (e) => {
        console.log("input1", e.target.value)
        setInput1(Number(e.target.value))
    }

    const handleInput2Change = (e) => {
        console.log("input2", e.target.value)
        setInput2(Number(e.target.value))
    }

    return (
        <>
            <div>
                <input onChange={handleInput1Change} />
                +
                <input onChange={handleInput2Change} />
                <button onClick={addTwoNumbers}>Get Result</button>
            </div>
            <div>Output of {input1} + {input2} = {result}</div>
        </>
    )
}

export default AddNum;