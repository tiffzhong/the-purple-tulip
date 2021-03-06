import React, { Component } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import axios from "axios";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentDidMount = () => {
    this.getImages();
  };

  getImages = () => {
    axios.get("/api/ig/getPictures").then(res => {
      this.setState({
        images: res.data.data
      });
    });
  };
  render() {
    const { images } = this.state;
    let photos = images.map(i => {
      return (
        <>
          <img src={i.images.standard_resolution.url} alt="ig" />
        </>
      );
    });
    return (
      <div className="footer-container">
        <div className="ig-container">
          {photos.slice(0, 5)}
          <div className="follow-text">
            <h1>
              follow us on <i class="fab fa-instagram" />
            </h1>
            <a href="https://www.instagram.com/thepurpletulipinc/">
              @thepurpletulipinc
            </a>
          </div>
        </div>
        <div className="link container">
          <Link to="/about">about</Link>
          <Link to="/gallery">gallery</Link>
          <Link to="/shop">order</Link>
          <Link to="/contact">contact</Link>
          <a href="mailto:ThePurpleTulip.inc@gmail.com">
            <i class="far fa-envelope" />
          </a>
          © 2019,<Link to="/">The Purple Tulip</Link>
        </div>
      </div>
    );
  }
}
export default Footer;
