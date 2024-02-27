import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { addToDo } from '../redux/features/toDoSlice';

let id = 1;

const AddToDo = () => {

    const dispatch = useDispatch();
    
    const [inputVal, setInputVal] = useState("")

    const handleAddToDo = () => {
        console.log("inputVal >>", inputVal)
        const toDoObj = {
            id: id,
            task: inputVal
        }
        dispatch(addToDo(toDoObj))
        id++;
    }

    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="Add Task"
                onChange={(e) => setInputVal(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={handleAddToDo}>
                Button
            </Button>
        </InputGroup>
    )
}

export default AddToDo