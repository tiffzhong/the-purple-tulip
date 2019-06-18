import React, { Component } from "react";
import "./Services.scss";
import { Link } from "react-router-dom";
import NavBarServices from "../NavBars/NavBarServices";
import servicePic from "./services.jpg";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <NavBarServices />
        <div className="service-container">
          <h2>
            We do{" "}
            <Link to="/services/deliveryinfo">Local Flower Deliveries</Link>,{" "}
            <Link to="/gallery/occasions">Special Events</Link>, and{" "}
            <Link to="/services/wedding">Weddings</Link>!
          </h2>
          <img src={servicePic} alt="flower-service" />
          <div className="service-info">
            <h5>Deliveries</h5>
            <p>
              We currently deliver in San Jose, CA and surrounding cities.
              Please check out our <Link to="/gallery">gallery </Link> and{" "}
              <Link to="/services/deliveryinfo">delivery information</Link> if
              you would like to see our work and place and order.
            </p>
            <div className="liner" />
            <h5>Events</h5>
            <p>
              Let us be a part of your{" "}
              <Link to="/gallery/occasions"> special occasion</Link> and
              celebrations! We offer a variety of different and beautifully
              crafted designs. From birthdays blooms, anniversaries vase
              arrangements, prom essentials, weddings arrangements, or just
              because bouquets. We promise each arrangements are carefully
              crafted with its own uniqueness customized just for you.
            </p>
            <div className="liner" />
            <h5>Weddings</h5>
            <p>
              If you are looking for a unique and personalized flower design for
              your wedding, please contact us for a complimentary floral
              consultation. Get started by filling out our{" "}
              <Link to="/services/wedding">wedding consultation form</Link> to
              send me more information. Please allow 48 hours and we will
              contact you back via email. First consultation is free. Any
              consultation requested by client after first meet is $50. Feel
              free to refer to our <Link to="/gallery/occasions">wedding</Link>{" "}
              section for inspiration.
            </p>

            <p>
              Have a question about designs or what type of flowers we carry? Do
              not hesitate to <Link to="/contact">Contact</Link> me!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Services;
