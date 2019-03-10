import React, { Component } from "react";
import "./About.scss";
import orange from "../Images/orange.jpg";
class About extends Component {
  render() {
    return (
      <div className="about-container">
        <section>
          <h1>About</h1>
          <p>
            The Purple Tulip is a full-service floral delivery business in San
            Jose, California, that specializes in daily deliveries, weddings,
            special events, parties, showers, birthdays, and flowers by the week
            for business or pleasure.
          </p>

          <div className="info">
            <img src={orange} width="250" alt="" />
            <article>
              Mission: Flowers for a brighter and happier state of mind.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </article>
          </div>
        </section>
      </div>
    );
  }
}
export default About;
