import { memo } from "react";
import { Button } from "react-bootstrap";


const Child = ({ todo, addToDoTask }) => {

    console.log("Child component render")

    return (
        <>
            <h1>ToDo Data</h1>
            <Button onClick={addToDoTask}>Add A new Random Task</Button>
            {todo.map((task, index) => <p key={index}>{task}</p>)}
            <hr />
        </>
    )
}

export default memo(Child);