import React, { Component } from "react";
import g1 from "./gal1.jpg";
import g2 from "./gal2.jpg";
import g3 from "./gal3.jpg";
import g4 from "./gal4.jpg";
import g5 from "./gal5.jpg";
import g6 from "./gal6.jpg";
import "./Gallery.scss";
import NavBarGallery from "../NavBars/NavBarGallery";
import { Link } from "react-router-dom";

class Gallery extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="gallery">
        <NavBarGallery />
        <div className="gal-container">
          <div className="sub1">
            <div className="content-1">
              <div className="overlay" />
              <img src={g4} alt="g4" />
              <div className="content-details">
                <Link to="/gallery/bouquets">hand wrapped bouquets</Link>
              </div>
            </div>

            <div className="content-2">
              <div className="overlay" />
              <img src={g6} alt="g6" />
              <div className="content-details">
                <Link to="/gallery/vases">vase arrangements</Link>
              </div>
            </div>
          </div>

          <div className="sub1">
            <div className="content-2">
              <div className="overlay" />
              <img src={g1} alt="g6" />
              <div className="content-details">
                <Link to="/gallery/occasions">weddings</Link>
              </div>
            </div>
            <div className="content-1">
              <div className="overlay" />
              <img src={g2} alt="g4" />
              <div className="content-details">
                <Link to="/gallery/occasions">special occasions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Gallery;
