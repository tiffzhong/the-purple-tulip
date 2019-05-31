import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBarv2.scss";
import logo from "../Images/logo.png";

class NavBarv2 extends Component {
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
      <div className="navbar2-container">
        <Link to="/">
          <img src={logo} height="150" alt="logo" />
        </Link>
        <div className="links">
          <button onClick={this.toggle}>☰</button>
        </div>

        <ul className={this.state.toggle ? "show" : "hide"}>
          <hr />
          <Link to="/">
            <li>home</li>
          </Link>
          <Link to="/about">
            <li>about</li>
          </Link>
          <Link to="/gallery">
            <li className="handle">gallery</li>
          </Link>
          <Link to="/services">
            <li>services</li>
          </Link>

          <Link to="/contact">
            <li>contact</li>
          </Link>
          <hr />
        </ul>
      </div>
    );
  }
}
export default NavBarv2;
