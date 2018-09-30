import React from "react";
import CardComponent from "./CardComponent";
import Cards2 from "./Cards2";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";
import MenuAppBar from "./MenuAppBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Countdown from "./Countdown";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentDate = new Date();
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear();
    return (
      <div id="wrapper">
        <MenuAppBar logOut={this.props.logOut} />
        <h3 className="title">Bidding Ends</h3>
        <Countdown date={`${year}-12-24T00:00:00`} />
        <div className="card-layout">
          <Cards2 classes={{ card: "mr-fluff" }} bidder={this.props.bidder} />
        </div>
      </div>
    );
  }
}

export default App;
