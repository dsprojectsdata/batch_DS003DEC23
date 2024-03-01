import { useState } from "react"
import './App.css';


function App() {

	let [count, setCount] = useState(5);

	const incrementNum = () => {
		console.log("Increment Number", count);
		count = count + 1;
		setCount(count)
	}

	const decrementNum = () => {
		if(count > 0){
			setCount(count - 1)
		}
	}

	const idName = "heading";

	return (
		<div>
			<header>Header count - {count}</header>
			<h3 id={idName}>Increment/Decrement Number</h3>
			<h4>Count - <span id='count-number'>{count}</span> </h4>
			<div>
				<button onClick={incrementNum}>INC - {count}</button> &nbsp;
				<button onClick={decrementNum}>DEC - {count}</button>
			</div>
		</div>
	);

}

export default App;

// {} -> evaluate expression