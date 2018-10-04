import React, { Component } from "react";
import "./App.css";
import App from "./App";
import { withStyles } from "@material-ui/core/styles";
import cookie from "cookie";

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
            <div className="bidr-logo" />
            <div className="login-form">
              <div className="username">
                <label>Username:</label>
                <input
                  type="text"
                  id="uname"
                  name="uname"
                  placeholder="Lesley"
                  required
                  onChange={e => this.usernameChanged(e)}
                />
                <span className="validity" />
              </div>
              <div className="password">
                <label>Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Lesley"
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
      user: null
    };
  }

  login = (username, password) => {
    let authed = false;
    let currentUser = null;

    users.forEach(user => {
      if (username === user.name && password === user.pass) {
        authed = true;
        document.cookie = "authed=true; max-age=360;";
        currentUser = username;
      }
    });

    this.setState({ authed, user: currentUser });
  };

  logOut = () => {
    document.cookie = "authed=false;";
    this.setState({
      authed: false,
      user: null
    });
  };

  checkSession = () => {
    const cookies = cookie.parse(document.cookie);
    return this.state.authed || JSON.parse(cookies.authed || "false");
  };

  render() {
    // true ?
    // this.state.authed ?
    return this.checkSession() ? (
      <App bidder={this.state.user} logOut={this.logOut} />
    ) : (
      <Form login={this.login} />
    );
  }
}

export default Login;
