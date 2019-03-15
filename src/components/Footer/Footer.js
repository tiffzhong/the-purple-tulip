import React, { Component } from "react";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <footer>
        Contact:
        <a href="https://www.instagram.com/thepurpletulipinc/">
          <i class="fab fa-instagram" />
        </a>
        <a href="mailto:ThePurpleTulip.inc@gmail.com">
          <i class="far fa-envelope" />
        </a>
      </footer>
    );
  }
}
export default Footer;
