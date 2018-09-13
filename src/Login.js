import React, { Component } from "react";
import "./App.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authed: false,
            user: null
        }
    }

    users = [
        {
            name: 'test',
            pass: 'testing'
        }
    ]

    logIn(credentials) {
        let authed = false;
        users.forEach(user => {
            if (credentials.name === user.name && credentials.pass === user.pass) {
                authed = true;
            }
        });
        return authed;
        //   if true, render APP else
        {
            this.state.authed ? <App /> : <Login login={this.login} />
        }

    }

    // const creds = {
    //     name: 'test',
    //     pass: 'testing'
    // };




    render() {
        return (

            <div id="login-wrapper" >
                <div class="username">
                    <label for="uname">Username:</label>
                    <input type="text" id="uname" name="uname" required />
                    <span class="validity"></span>
                </div>
                <div class="password">
                    <label for="password">Password:</label>
                    <input type="text" id="password" name="password" required />
                    <span class="validity"></span>
                </div>
                {/* login(creds);
    on submit => call login  */}
                <Button
                    color="primary"
                    className={classes.button}
                    style={{ fontSize: "20px" }}
                    onClick={this.logIn}

                >
                    Sign In
            </Button >
            </div >

        );
    }
}
export default Login;