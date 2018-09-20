import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./Login";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import store from "./store";
// import { Provider } from "react-redux";

//add this later <Provider store={store}><Login /></Provider>,

ReactDOM.render(<Login />, document.getElementById("root"));
registerServiceWorker();
