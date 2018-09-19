import React, { Component } from "react";
import "./App.css";
import App from "./App";
import { withStyles } from "@material-ui/core/styles";

const users = [
  {
    name: "test",
    pass: "testing"
  },
  {
    name: "Lesley",
    pass: "Lesley"
  }
];

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  usernameChanged(e) {
    this.setState({
      username: e.target.value
    });
  }

  passChanged(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div id="login-wrapper">
        <div className="login-color-block">
          <div className="form-submit">
            <div className="bidr-logo">
          
            </div>
            <div className="login-form">
              <div className="username">
                <label>Username:</label>
                <input
                  type="text"
                  id="uname"
                  name="uname"
                  required
                  onChange={e => this.usernameChanged(e)}
                />
                <span className="validity" />
              </div>
              <div className="password">
                <label>Password:</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  required
                  onChange={e => this.passChanged(e)}
                />
                <span className="validity" />
              </div>
              <button
                color="primary"
                style={{ fontSize: "20px" }}
                onClick={() =>
                  this.props.login(this.state.username, this.state.password)
                }
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      user: "Lesley"
    };
  }

  login = (username, password) => {
    let authed = false;
    let currentUser = null;

    users.forEach(user => {
      if (username === user.name && password === user.pass) {
        authed = true;
        currentUser = username;
      }
    });

    this.setState({ authed, user: currentUser });
  };

  render() {
    return this.state.authed ? (
      <App bidder={this.state.user} />
    ) : (
      <Form login={this.login} />
    );
  }
}

export default Login;
