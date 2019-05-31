import React, { Component } from "react";
import "./LandingPage.scss";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <NavBar />
        <section>
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="mission-container">
            Flowers for a brighter and happier state of mind.
          </div>
          <Link to="/gallery">view gallery</Link>
        </section>
      </div>
    );
  }
}
export default LandingPage;
