import { useState } from "react"

let incNum = 1;

const ToDoList = () => {

    const [inputVal, setInputVal] = useState("");
    const [allToDoList, setAllToDoList] = useState([]);

    const handleInputChange = (event) => {
        setInputVal(event.target.value);
    }

    const addToDoTask = () => {
        // console.log("on clicking the button >>",inputVal)
        const taskObj = {
            id: incNum,
            task: inputVal
        }
        const newTaskArr = [...allToDoList, taskObj];
        setAllToDoList(newTaskArr)
        incNum++;
    }

    const handleDelete = (id) => {
        console.log("allToDoList >>", allToDoList)
        console.log("id >>", id)

        const filteredArr = allToDoList.filter((task) => task.id !== id)
        // console.log("filteredArr >>",filteredArr);
        setAllToDoList(filteredArr);
    }

    // console.log("allToDoList >>", allToDoList)

    return (
        <>
            <input onChange={handleInputChange} /> <button onClick={addToDoTask} >Add Task</button>

            <div>
                <ul>
                    {/* <li>Task 1 <button>Del</button> </li>
                    <li>Task 2 <button>Del</button></li> */}
                    {allToDoList.map((task) => {
                        return (
                            <li>{task.task} <button onClick={() => handleDelete(task.id)}>Del</button> </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default ToDoList;

// [
//     {
//         task: "Task 1"
//     },
//     {
//         task: "Task 2"
//     }
// ]