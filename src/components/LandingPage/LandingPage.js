import React, { Component } from "react";
import "./LandingPage.scss";
import logo from "../Images/logo.png";
class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <section>
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="mission-container">
            Flowers for a brighter and happier state of mind.
          </div>
          <button className="landing-button">view gallery</button>
        </section>
      </div>
    );
  }
}
export default LandingPage;
