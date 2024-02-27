import { Button } from 'react-bootstrap';
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

const ShowToDo = () => {

    const toDoData = useSelector((state) => state.toDo.toDoData)

    console.log("toDoData", toDoData)

    const style = { display: "flex", justifyContent: "space-between" }

    return (
        <ListGroup style={{ width: "100%" }}>
            {toDoData.map((todo, index) => <ListGroup.Item key={index} style={style}>{todo.task} <Button variant="danger">Delete</Button> </ListGroup.Item>)}
            {/* <ListGroup.Item style={style}>Cras justo odio <Button variant="danger">Delete</Button> </ListGroup.Item>
            <ListGroup.Item style={style}>Cras justo odio <Button variant="danger">Delete</Button> </ListGroup.Item>
            <ListGroup.Item style={style}>Cras justo odio <Button variant="danger">Delete</Button> </ListGroup.Item>
            <ListGroup.Item style={style}>Cras justo odio <Button variant="danger">Delete</Button> </ListGroup.Item> */}
        </ListGroup>
    )
}

export default ShowToDo