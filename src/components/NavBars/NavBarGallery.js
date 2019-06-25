import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBars.scss";
import logo from "../Images/logo.png";

class NavBarGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      galleryToggle: false
    };
  }
  toggle = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  galleryToggle = event => {
    this.setState({
      galleryToggle: !this.state.galleryToggle
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
            <li>about</li>
          </Link>
          <div className="dropdown">
            <div className="link-display">
              <Link to="/gallery">
                <li className="handle">gallery</li>
              </Link>
              <i onClick={this.galleryToggle} class="fas fa-caret-down" />
            </div>
            <div
              className={
                this.state.galleryToggle
                  ? "nav-click-content"
                  : "nav-click-hide"
              }
            >
              <li>bouquets</li>
              <li>vases</li>
              <li>special events</li>
            </div>
          </div>
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
