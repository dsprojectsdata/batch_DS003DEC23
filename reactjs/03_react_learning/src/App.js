import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./Header"

// const [count, setCount] =  useState(10);

function App() {
  const [count, setCount] =  useState(10);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("nitesh_jangid");
  
  const name = "Nikhilesh";

  

  return (
    <div className="App">

      <Header name="Nikhilesh" myUserName={userName} />

      <hr />
      
      <h2>Count: {count}</h2>
      <h2>Am I logged in: {isLoggedIn ? "YES" : "NO"}</h2>
      <p>Username - {userName}</p>
    </div>
  );
}

export default App;

// Hooks can only be called inside the body of a function component.
// Call them at the top level in the body of a function component