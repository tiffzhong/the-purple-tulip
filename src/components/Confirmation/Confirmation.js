import React from "react";
import { Link } from "react-router-dom";

function Confirmation(props) {
  return (
    <div className="confirmation-page-container">
      Thank you so much for your Inquiry! I will get back to you as soon as I
      can.
      <Link to="/services">Services</Link>
    </div>
  );
}

export default Confirmation;
