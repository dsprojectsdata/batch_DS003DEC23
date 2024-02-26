import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

	const counterData = useSelector((state) => state.counter)

	console.log("counterData >>", counterData)

	return (
		<div className="App">
			<h2>Counts: 20</h2>
		</div>
	);
}

export default App;
