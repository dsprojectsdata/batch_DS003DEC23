import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import ShowToDo from './components/ShowToDo';
import Login from './components/Login';

function App() {
	return (
		<div className="App">
			{/* <Header /> */}
			<div style={{ width: "70vh", margin: "auto", minHeight: "80vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
				{/* <AddToDo />
				<ShowToDo /> */}
				<Login />
			</div>
		</div>
	);
}

export default App;
