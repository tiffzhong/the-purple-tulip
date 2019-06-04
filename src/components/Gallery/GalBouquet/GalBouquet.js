import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./GalBouquet.scss";
import NavBarGallery from "../../NavBarGallery/NavBarGallery";
import g1 from "../gal1.jpg";
import g2 from "../gal2.jpg";
import g3 from "../gal3.jpg";
import g4 from "../gal4.jpg";
import g5 from "../gal5.jpg";
import g6 from "../gal6.jpg";

class GalBouquet extends Component {
  render() {
    return (
      <>
        <NavBarGallery />
        <div className="bouquet-gallery">
          <h1>Bouquets</h1>
          <div className="link-header">
            <Link smooth to="/gallery/bouquets#size1">
              Size1
            </Link>
            <Link smooth to="/gallery/bouquets#size2">
              Size2
            </Link>
            <Link smooth to="/gallery/bouquets#size3">
              Size3
            </Link>
            <Link smooth to="/gallery/bouquets#size4">
              Size4
            </Link>
            <Link smooth to="/gallery/bouquets#size5">
              Size5
            </Link>
          </div>
          <div className="bouquet-photo-container">
            <section id="size1">
              <h2>Size1</h2>
              <div className="photo-container">
                <img src={g4} alt="g4" />
                <img src={g4} alt="g4" />
                <img src={g4} alt="g4" />
                <img src={g4} alt="g4" />
                <img src={g4} alt="g4" />
                <img src={g4} alt="g4" />
              </div>
            </section>
            <section id="size2">
              <h2>Size2</h2>
              <div className="photo-container">
                <img src={g3} alt="g3" />
                <img src={g3} alt="g3" />
                <img src={g3} alt="g3" />
                <img src={g3} alt="g3" />
                <img src={g3} alt="g3" />
                <img src={g3} alt="g3" />
              </div>
            </section>
            <section id="size3">
              <h2>Size3</h2>
              <div className="photo-container">
                <img src={g5} alt="g5" />
                <img src={g5} alt="g5" />
                <img src={g5} alt="g5" />
                <img src={g5} alt="g5" />
                <img src={g5} alt="g5" />
                <img src={g5} alt="g5" />
              </div>
            </section>
            <section id="size4">
              <h2>Size4</h2>
              <div className="photo-container">
                <img src={g1} alt="g1" />
                <img src={g1} alt="g1" />
                <img src={g1} alt="g1" />
                <img src={g1} alt="g1" />
                <img src={g1} alt="g1" />
                <img src={g1} alt="g1" />
              </div>
            </section>
            <section id="size5">
              <h2>Size5</h2>
              <div className="photo-container">
                <img src={g2} alt="g2" />
                <img src={g2} alt="g2" />
                <img src={g2} alt="g2" />
                <img src={g2} alt="g2" />
                <img src={g2} alt="g2" />
                <img src={g2} alt="g2" />
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
export default GalBouquet;
