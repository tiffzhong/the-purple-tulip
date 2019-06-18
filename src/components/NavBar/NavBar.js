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
      <div className="navbar-container">
        {/* <Link to="/">
          <img src={logo} height="60" alt="logo" />
        </Link> */}
        <div className="links">
          <button onClick={this.toggle}>☰</button>
        </div>
        <ul className={this.state.toggle ? "show" : "hide"}>
          <hr />
          <Link to="/">
            <li className="handle">home</li>
          </Link>
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
          <Link to="/admin/home">
            <li>temp</li>
          </Link>
          <hr />
        </ul>
      </div>
    );
  }
}
export default NavBar;
