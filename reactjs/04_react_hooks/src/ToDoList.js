import { useEffect, useState } from "react"

let incNum = 1;

const ToDoList = () => {

    const [inputVal, setInputVal] = useState("");
    const [allToDoList, setAllToDoList] = useState([]);

    const handleInputChange = (event) => {
        setInputVal(event.target.value);
    }

    const addToDoTask = () => {
        const taskObj = {
            id: incNum,
            task: inputVal
        }
        const newTaskArr = [...allToDoList, taskObj];
        setAllToDoList(newTaskArr)
        localStorage.setItem("todo", JSON.stringify(newTaskArr))
        incNum++;
    }

    const handleDelete = (id) => {
        const filteredArr = allToDoList.filter((task) => task.id !== id)
        setAllToDoList(filteredArr);
    }

    useEffect(() => {
        const localStorageData = localStorage.getItem("todo");
        console.log("localstorageData >>", localStorageData)
        console.log("localstorageData >>", JSON.parse(localStorageData))
        setAllToDoList(JSON.parse(localStorageData));
    }, [])

    return (
        <>
            <input onChange={handleInputChange} /> <button onClick={addToDoTask} >Add Task</button>
            <div>
                <ul>
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