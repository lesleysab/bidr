import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./Login";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
