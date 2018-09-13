import React from "react";
import CardComponent from "./CardComponent";
import Cards2 from "./Cards2";
import { withStyles } from "@material-ui/core/styles";
import "./App.css";




class App extends React.Component {


  render() {


    return (
      <div id="wrapper">
        <div className="card-layout">

          <Cards2 classes={{ card: "mr-fluff" }} />
        </div>
      </div>



    );
  }
}

export default App;
