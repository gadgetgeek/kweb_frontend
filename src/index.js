import React from "react";
import ReactDOM from "react-dom";
// IMPORT SCSS FILE TO BE SOURCE OF STYLING
import "./styles.scss";
// IMPORT ROUTER
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
      <h2>Welcome to the Grocery List App!</h2>
      <h3>Add any items you need from the store so you can take your grocery list anywhere with our Grocery List app</h3>
      <img src="https://i.imgur.com/iMP6Mvz.jpeg" className="app-logo" alt=""/>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
