import React, { Component, createContext } from "react";
import "./Admin.scss";
import axios from "axios";

const { Provider } = createContext({
  user: null,
  logout: () => {}
});

class AdminLogin extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      showRegister: false,
      message: null,
      logout: () => this.logout()
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
          message: "Something went wrong w register: " + error
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
        window.location.pathname = "/orders";
      })
      .catch(error => {
        this.setState({
          message: this.getMessage(error)
        });
      });
  };

  logout = () => {
    axios
      .post("/admin/logout")
      .then(response => {
        this.setState({ user: null });
      })
      .catch(error => {
        this.setState({
          message: "Something went wrong w logout: " + this.getMessage(error)
        });
      });
  };

  render() {
    const { user, showRegister, message } = this.state;

    const inputFields = (
      <div>
        Username: <input ref="username" /> Password:{" "}
        <input type="password" ref="password" />{" "}
      </div>
    );

    return (
      <Provider value={this.state}>
        <div className="admin-page">
          {!user && (
            <div className="admin-container">
              <a
                href="javascript:void(0)"
                onClick={() => this.setState({ showRegister: false })}
              >
                Login
              </a>{" "}
              <a
                href="javascript:void(0)"
                onClick={() => this.setState({ showRegister: true })}
              >
                Register
              </a>
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
                    <h3>Log in</h3>
                    {inputFields}
                    <button onClick={this.login}>Log in</button>
                  </div>
                )}
                {message}
              </div>
            </div>
            // ) : (
            //   <div className="user-info">
            //     <h2>Hello, Admin!</h2>
            //     <h3>Your Inquiries</h3>

            //     <button onClick={this.logout}>Log out</button>
            //   </div>
          )}
        </div>
      </Provider>
    );
  }
}

export default AdminLogin;
