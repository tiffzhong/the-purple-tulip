import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";
const Error = props => {
  return (
    <div className="error-page">
      Sorry but this Page Doesn't Exist!
      <Link to="/gallery">gallery</Link>
      <Link to="/shop">order</Link>
      <Link to="/contact">contact</Link>
    </div>
  );
};
export default Error;
