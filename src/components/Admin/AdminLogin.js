import React, { Component } from "react";
import "./Admin.scss";
import axios from "axios";

class AdminLogin extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      showRegister: false,
      message: null
    };
  }
  getMessage = error =>
    error.response
      ? error.response.data
        ? error.response.data.message
        : JSON.stringify(error.response.data, null, 2)
      : error.message;

  register = () => {
    this.setState({ message: null });
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    axios
      .post("/admin/register", {
        username,
        password
      })
      .then(response => {
        this.setState({ user: response.data });
      })
      .catch(error => {
        this.setState({
          message: this.getMessage(error)
        });
      });
  };

  login = () => {
    this.setState({ message: null });
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    axios
      .post("/admin/login", {
        username,
        password
      })
      .then(response => {
        this.setState({ user: response.data });
        window.location.pathname = "/admin/home";
      })
      .catch(error => {
        this.setState({
          message: this.getMessage(error)
        });
      });
  };

  render() {
    const { user, showRegister, message } = this.state;

    const inputFields = (
      <div className="input-field">
        Username: <input ref="username" /> Password:
        <input type="password" ref="password" />
      </div>
    );

    return (
      <div className="admin-login">
        {!user && (
          <div className="admin-container">
            <a
              href="javascript:void(0)"
              onClick={() => this.setState({ showRegister: false })}
            >
              Login
            </a>{" "}
            {/* <a
              href="javascript:void(0)"
              onClick={() => this.setState({ showRegister: true })}
            >
              Register
            </a> */}
            <div className="login-or-register">
              {showRegister && (
                <div>
                  <h3>Register</h3>
                  {inputFields}
                  <button onClick={this.register}>Register</button>
                </div>
              )}
              {!showRegister && (
                <div>
                  <h3>Admin Log In</h3>
                  {inputFields}
                  <button onClick={this.login}>Log in</button>
                </div>
              )}
              {message}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdminLogin;
