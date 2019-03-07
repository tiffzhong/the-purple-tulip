import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import logo from "../Images/logo.png";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  toggle = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  render() {
    return (
      <header>
        <div className="navbar-logo-container">
          <Link to="/">
            <img src={logo} height="60" alt="logo" />
          </Link>
        </div>
        <div className="links">
          <button onClick={this.toggle}>☰</button>
        </div>
        <ul className={this.state.toggle ? "show" : "hide"}>
          <Link to="/about">
            <li>about</li>
          </Link>
          <Link to="/gallery">
            <li>gallery</li>
          </Link>
          <Link to="/services">
            <li>services</li>
          </Link>
          <Link to="/contact">
            <li>contact</li>
          </Link>
        </ul>
      </header>
    );
  }
}
export default NavBar;
