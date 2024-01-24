import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

function CustomAPP(){
  return (
    <h1>Nikhilesh Sharma | React JS</h1>
  )
}

const name = "Nikhilesh Sharma"

const customElement = React.createElement("h1", { id: "main-heading" }, "Nikhilesh Sharma | React JS!!", name)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// const rootElement = document.getElementById("root");

// const h1Element = document.createElement("h1");
// h1Element.innerText = "React JS Course | DS"
// h1Element.style.color = "red"

// rootElement.appendChild(h1Element);


// JSX -> javaScript XML
// JSX is more readable and expressive than vanilla javascript
// It allows to use custom component as HTML tags
// Browser can't read JSX directly, so babel compile it and send the code to browser