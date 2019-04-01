import React from "react";
import { Link } from "react-router-dom";
import "./Confirmation.scss";

function Confirmation(props) {
  return (
    <div className="confirmation-container">
      <section>
        <h1>Talk soon!</h1>
        <p>
          I have received your inquiry! I will get in touch with you as soon as
          I can.
        </p>
        <br />
        <Link to="/gallery">Gallery</Link>
        <Link to="/shop">Shop</Link>
      </section>
    </div>
  );
}

export default Confirmation;
