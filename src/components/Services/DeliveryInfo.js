import React from "react";
import { Link } from "react-router-dom";
import "./Services.scss";
import delivery from "./delivery.jpg";
import NavBarServices from "../NavBars/NavBarServices";
function DeliveryInfo() {
  return (
    <div className="deliveryinfo">
      <NavBarServices />
      <div className="delivery-info-container">
        <div className="image-container">
          <h1>Local Flower Delivery Information</h1>
          <img src={delivery} alt="delivery" />
        </div>
        <div className="heading-container">
          <h5>
            We currently serve in San Jose, CA and surrounding South Bay cities.
          </h5>
          <h5>Please contact us 24 hours in advance for deliveries.</h5>
        </div>
        <div className="container-holder">
          <div className="container-service">
            <h6>Our non-holiday delivery service window times are: </h6>
            <ul>
              <li>Monday to Friday: 11:30am to 3:00pm</li>
              <li>Saturdays and Sundays: 11:00am to 6:00pm</li>
              <li className="last-li">
                *We provide same day delivery service, however there is an
                additional $10 charge along with your order being designers
                choice.
              </li>
            </ul>
          </div>
          <div className="container-service">
            {" "}
            <h6>Additional delivery fees are as follows: </h6>
            <ul>
              <li> $15 - San Jose</li>
              <li>
                $20 - Santa Clara, Milpitas, Morgan Hill, Los Gatos, Campbell,
                Sunnyvale
              </li>
              <li> $25 - Gilroy, Mountain view, Palo Alto, Fremont</li>
              <li>$35 - Newark, Palo Alto, Gilroy</li>
              <li className="last-li">
                *Unfortunately we are not offering deliveries in San Francisco
                at this time.
              </li>
            </ul>
          </div>
        </div>

        <div className="heading-container">
          <h5>
            <Link to="/contact">Contact</Link> to place an order or for a
            quicker response, text us at 408-872-2972
          </h5>
          <h5>
            For inspiration on what to order, check out our{" "}
            <Link to="/gallery">gallery</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
