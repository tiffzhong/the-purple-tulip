import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBars.scss";
import logo from "../Images/logo.png";

class NavBarGallery extends Component {
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
          <img src={logo} height="120" alt="logo" />
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
            <li className="handle">about</li>
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
          <hr />
        </ul>
      </div>
    );
  }
}
export default NavBarGallery;
