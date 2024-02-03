import { useState } from "react";


const PrintName = () => {

    // let name = "Nikhil";
    const [name, setName] = useState("");
    
    const handleInputChange = (event) => {
        console.log("Am I here??", event.target.value);
        // name = "ABCD"
        setName(event.target.value)
    }

    return (
        <>
            <input onChange={handleInputChange} />
            {/* <button>Print Your Name</button> */}

            <div>
                Your Name is : {name}
            </div>
        </>
    )
}

export default PrintName;