import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import ShowToDo from './components/ShowToDo';

function App() {
	return (
		<div className="App">
			<Header />
			<div style={{ width: "70vh", margin: "auto", minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
				<AddToDo />
				<ShowToDo />
			</div>
		</div>
	);
}

export default App;
