import React, { Component } from "react";
import "./Admin.scss";
import axios from "axios";

class Admin extends Component {
  state = {
    user: null,
    showRegister: false,
    message: null,
    inq: []
  };

  componentDidMount() {
    this.inquiryData();
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

  inquiryData = () => {
    axios.get("/admin/inquiries").then(res => {
      this.setState({ inq: res.data });
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

    const allData = this.state.inq.map(i => {
      return (
        <div className="inquiry-container">
          #|date|inquiry_id|fullname|email|inquiry| location|details
          {i.id}
          {i.date}
          {i.inquiry_id}
          {i.fullname}
          {i.email}
          {i.inquiry}
          {i.location}
          {i.details}
        </div>
      );
    });

    return (
      <div className="admin-page">
        {!user ? (
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
        ) : (
          <div className="user-info">
            <h2>Hello, Admin!</h2>
            <h3>Your Inquiries</h3>
            {allData}
            <button onClick={this.logout}>Log out</button>
          </div>
        )}
      </div>
    );
  }
}

export default Admin;
