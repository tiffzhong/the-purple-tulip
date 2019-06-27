import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBars.scss";
import logo from "../Images/logo.png";

class NavBarGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      galleryToggle: false,
      rotate: false,
      serviceToggle: false,
      serviceRotate: false
    };
  }
  toggle = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  serviceToggler = () => {
    this.setState({
      serviceToggle: !this.state.serviceToggle
    });
  };
  galleryToggler = () => {
    this.setState({
      galleryToggle: !this.state.galleryToggle
    });
  };
  rotateToggler = () => {
    this.setState({
      rotate: !this.state.rotate
    });
  };
  serviceRotateToggler = () => {
    this.setState({
      serviceRotate: !this.state.serviceRotate
    });
  };
  combine = () => {
    this.galleryToggler();
    this.rotateToggler();
  };
  serviceCombine = () => {
    this.serviceToggler();
    this.serviceRotateToggler();
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
          <Link to="/" className="home-style">
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
              <i
                onClick={this.combine}
                class={
                  this.state.rotate
                    ? "fas fa-caret-down fa-flip-vertical"
                    : "fas fa-caret-down"
                }
              />
            </div>
            <div
              className={
                this.state.galleryToggle
                  ? "nav-click-content"
                  : "nav-click-hide"
              }
            >
              <Link to="/gallery/bouquets">bouquets</Link>
              <Link to="/gallery/vases">vases</Link>
              <Link to="/gallery/occasions">special events</Link>
            </div>
          </div>
          <div className="dropdown">
            <div className="link-display">
              <Link to="/services">
                <li>services</li>
              </Link>
              <i
                onClick={this.serviceCombine}
                class={
                  this.state.serviceRotate
                    ? "fas fa-caret-down fa-flip-vertical"
                    : "fas fa-caret-down"
                }
              />
            </div>
            <div
              className={
                this.state.serviceToggle
                  ? "nav-click-content-service"
                  : "nav-click-hide"
              }
            >
              <Link to="/services/deliveryinfo">delivery information</Link>
              <Link to="/services/wedding">wedding consultation</Link>
            </div>
          </div>

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
