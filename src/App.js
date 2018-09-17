import React from "react";
import CardComponent from "./CardComponent";
import Cards2 from "./Cards2";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";
import MenuAppBar from "./MenuAppBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="wrapper">
        <MenuAppBar />
        <div className="card-layout">
          <Cards2 classes={{ card: "mr-fluff" }} bidder={this.props.bidder} />
        </div>
        <Switch>
          <Route exact path="/signin" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
