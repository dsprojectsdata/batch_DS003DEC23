import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from './redux/features/counterSlice';
import { useEffect } from 'react';

function App() {

	const data = useSelector((state) => state.counter);

	console.log(data);

	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(incrementCount())
	}

	return (
		<div className="App">
			<h2>Counts: {data.count}</h2>
			<button onClick={handleIncrement}>Increment Count</button>
			<button onClick={() => dispatch(decrementCount())}>Increment Count</button>
		</div>
	);
}

export default App;
