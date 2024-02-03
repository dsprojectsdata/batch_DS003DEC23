import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VDOM from "./VDOM"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);

// const update = () => {
//   const element = (
//     <>
//      <h3>React:</h3>
//      <form>
//       <input type="text" />
//      </form>
//      <span>Time: {new Date().toLocaleTimeString()}</span>
//     </>
//    );
   
  
//   root.render(
//     <React.StrictMode>
//       {element}
//     </React.StrictMode>
//   );

// }

// setInterval(update, 1000);