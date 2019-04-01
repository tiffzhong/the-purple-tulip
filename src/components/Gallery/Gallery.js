import React, { Component } from "react";
import axios from "axios";
import "./Gallery.scss";
import pink from "../Images/pink.jpg";
import purple from "../Images/purple.jpg";
import blue from "../Images/blue.jpeg";
import { Link } from "react-router-dom";

class Gallery extends Component {
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
          <h1>Portfolio</h1>
          <p>
            We design events to help congratulate, welcome, and inspire those
            around you, with arrangements and designs for weddings, corporate
            and personal parties, gallery openings, and many other events.
            Whatever your event and whatever theme you want to create - we are
            ready and excited to get started on planning!
            <br />
            <br />
            Every arrangement we make is a new, fresh, inspired creation based
            on what we have in the shop. We can do special orders given enough
            advance notice.
          </p>

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
export default Gallery;
