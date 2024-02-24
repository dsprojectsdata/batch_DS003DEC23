import { useState } from "react";
import Component1 from "./Components/Component1";
import UserContext from "./UseContext/UserContext";
import LoginForm from "./LoginComponents/LoginForm";
import LoginData from "./LoginComponents/LoginData";
import LoginContext from "./UseContext/LoginContext";


// function App() {

// 	const [user, setUser] = useState({ username: "nikhilesh_here" })

// 	return (
// 		<div className="App">
// 			<UserContext.Provider value={user}>
// 				<Component1 /> 
// 			</UserContext.Provider>
// 		</div>
// 	);
// }

function App() {

	const [formData, setFormData] = useState({
		username: "",
		password: ""
	})

	return (
		<div className="App" style={{ textAlign: "center", padding: "40px 0" }}>
			<LoginContext.Provider value={{ formData, setFormData }}>
				<LoginForm />
				<LoginData />
			</LoginContext.Provider>
		</div>
	);
}

export default App;
