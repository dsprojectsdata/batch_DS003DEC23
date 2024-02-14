import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import Child from "./Child";


const Parent = () => {

    const [todo, setTodo] = useState(["Task 1", "Task 2"]);
    const [count, setCount] = useState(0)

    // const addToDoTask = () => {
    //     setTodo([...todo, `New Task ${Math.floor(Math.random() * 100)}`])
    // }

    const addToDoTask = useCallback(() => {
        setTodo([...todo, `New Task ${Math.floor(Math.random() * 100)}`])
    }, [todo])

    return (
        <>
            <Child todo={todo} addToDoTask={addToDoTask} />

            <h3>Count : {count}</h3>
            <Button onClick={() => setCount(count + 1)}>Increment Count</Button>

        </>
    )
}

export default Parent;