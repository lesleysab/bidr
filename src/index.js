import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./Login";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import store from "./store";
// import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BidItemForm from "./BidItemForm";

//add this later <Provider store={store}><Login /></Provider>,
const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/bidform" component={BidItemForm} />

        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
