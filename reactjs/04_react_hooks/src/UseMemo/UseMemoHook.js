import { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";


const UseMemoHook = () => {

    const [count, setCount] = useState(0);
    const [isDark, setIsDark] = useState(true);

    // const calculation = heavyCalculation(count)

    const calculation = useMemo(() => heavyCalculation(count), [count])

    const incrementCount = () => {
        setCount(count + 1);
    }

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    const styleObj = {
        color: isDark ? "#FFFFFF" : "#000000",
        backgroundColor: isDark ? "#000000" : "#FFFFFF",
        height: "100vh",
        padding: "30px 0"
    }

    return (
        <>
            <div style={styleObj}>
                <h4>Count is : {count}</h4>
                <h5>heavy Calculation : {calculation}</h5>
                <Button onClick={incrementCount}>Increment Count</Button>

                <Button onClick={toggleTheme} style={{ marginLeft: "16px" }}>Toggle Theme</Button>
            </div>
        </>
    )
}

export default UseMemoHook;


const heavyCalculation = (num) => {

    for (let index = 0; index < 5000000000; index++) {  }

    console.log("Calculation Function render");
    return num * 5;
}