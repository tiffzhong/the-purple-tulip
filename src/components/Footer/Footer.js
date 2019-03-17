import React, { Component } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <Link to="/about">about</Link>
        <Link to="/gallery">gallery</Link>
        <Link to="/services">services</Link>
        <Link to="/contact">contact</Link>
        <a href="https://www.instagram.com/thepurpletulipinc/">
          <i class="fab fa-instagram" />
        </a>
        <a href="mailto:ThePurpleTulip.inc@gmail.com">
          <i class="far fa-envelope" />
        </a>
      </div>
    );
  }
}
export default Footer;
