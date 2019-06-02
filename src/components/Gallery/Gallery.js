import React, { Component } from "react";
import g1 from "./gal1.jpg";
import g2 from "./gal2.jpg";
import g3 from "./gal3.jpg";
import g4 from "./gal4.jpg";
import g5 from "./gal5.jpg";
import g6 from "./gal6.jpg";
import "./Gallery.scss";
import NavBarv2 from "../NavBarv2/NavBarv2";

class Gallery extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="gallery">
        <NavBarv2 />
        <div className="gal-container">
          {/* <h1>gallery</h1> */}
          <div className="sub1">
            <div className="overflow-1">
              <img src={g4} alt="g4" />
              <div className="center-text">bouquets</div>
              <div className="overlay" />
            </div>
            {/* <h2>hand wrapped bouquets</h2> */}
            <div className="overflow-2">
              <img src={g6} alt="g6" />
              <div className="center-text">vase arrangements </div>
            </div>
          </div>

          <div className="sub1">
            <div className="overflow-2">
              <img src={g3} alt="g3" />
              <div className="center-text">weddings</div>
            </div>
            {/*  <h2>vase arrangements</h2> */}
            <div className="overflow-1">
              <img src={g1} alt="g1" />
              <div className="center-text">centerpieces</div>
            </div>
          </div>
          <div className="sub1">
            <div className="overflow-1">
              <img src={g5} alt="g5" />
              <div className="center-text">prom</div>
            </div>

            <div className="overflow-2">
              <img src={g2} alt="g2" />
              <div className="center-text">special occasions</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Gallery;
