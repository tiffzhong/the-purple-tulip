import React, { Component } from "react";
import "./Services.scss";
class Services extends Component {
  render() {
    return (
      <div className="services-container">
        <section>
          <h1>Services</h1>
          <p>
            We design events to help congratulate, welcome, and inspire those
            around you, with arrangements and designs for weddings, corporate
            and personal parties, gallery openings, and many other events.
            Whatever your event and whatever theme you want to create - we are
            ready and excited to get started on planning!
          </p>

          <div className="service-images">
            <article>
              <h4>Weddings</h4>
              <img src="" alt="weddings" />
            </article>
            <article>
              <h4>Daily Arrangements</h4>
              <img src="" alt="daily" />
            </article>
            <article>
              <h4>Special Events</h4>
              <img src="" alt="events" />
            </article>
          </div>
        </section>
      </div>
    );
  }
}
export default Services;
