import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

const route = createBrowserRouter([
	{
		path: "",
		element: <Home />
	},
	{
		path: "/contact-us",
		element: <Contact />
	},
	{
		path: "/about",
		element: <About />
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={route} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// use Element instead of Object
// 