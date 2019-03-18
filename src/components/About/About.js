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

          <div className="mission">
            <img src={orange} width="200" alt="" />
            <article>
              Mission: Flowers for a brighter and happier state of mind.
              <br />
              <br />
              During the past decade plus, we have elevated wedding and event
              floral design, creating artful arrangements from clean and
              contemporary to lush and foraged. We bring art to life by
              combining your inspiration and ideas with the finest floral
              materials, incomparable service and skilled artisanship. We source
              our flowers from all points of the globe, and our well-appointed
              designs are created through our unique depth and quality of
              experience.
              <br />
              We strive for an experience of satisfaction and nothing less.
            </article>
          </div>
        </section>
      </div>
    );
  }
}
export default About;
