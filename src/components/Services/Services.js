import React, { Component } from "react";
import axios from "axios";
import "./Services.scss";
import pink from "../Images/pink.jpg";
import purple from "../Images/purple.jpg";
import blue from "../Images/blue.jpeg";
import { Link } from "react-router-dom";

class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  render() {
    return (
      <div className="gallery-container">
        <section>
          <h1>Services</h1>

          <div className="service-images">
            <article>
              <Link to="/weddings">
                <h4>Weddings</h4>
                <img src={pink} alt="weddings" />
              </Link>
            </article>
            <article className="daily">
              <Link to="/arrangements">
                <h4>Daily Arrangements</h4>
                <img src={blue} alt="daily" />
              </Link>
            </article>
            <article>
              <Link to="/events">
                <h4>Special Events</h4>
                <img src={purple} alt="events" />
              </Link>
            </article>
          </div>
        </section>
      </div>
    );
  }
}
export default Services;
