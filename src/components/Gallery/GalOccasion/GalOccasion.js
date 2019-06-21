import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./GalOccasion.scss";
import NavBarGallery from "../../NavBars/NavBarGallery";
import { connect } from "react-redux";
import { getItems } from "../../../dux/reducer";
import OccasionModal from "./OccasionModal";

class GalOccasion extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false, imageClicked: [] };
  }

  componentDidMount() {
    this.props.getItems();
  }
  setImage = image => {
    this.setState({
      modalShow: true,
      imageClicked: image
    });
  };
  render() {
    console.log(this.props, "items on gal");
    let modalClose = () => this.setState({ modalShow: false });

    const wedding =
      this.props.items.length > 0 &&
      this.props.items
        .filter(wedding => wedding.product_category === "wedding")
        .map(weddingDisplay => (
          <div className="photo-holder-container">
            <img src={weddingDisplay.product_image} alt="weddingDisplay" />
            <div
              className="overlay-gal"
              onClick={() => this.setImage(weddingDisplay)}
            />
            <h2>{weddingDisplay.product_name}</h2>
          </div>
        ));

    const centerpiece =
      this.props.items.length > 0 &&
      this.props.items
        .filter(centerpiece => centerpiece.product_category === "centerpiece")
        .map(centerpieceDisplay => (
          <div className="photo-holder-container">
            <img
              src={centerpieceDisplay.product_image}
              alt="centerpieceDisplay"
            />
            <div
              className="overlay-gal"
              onClick={() => this.setImage(centerpieceDisplay)}
            />
            <h2>{centerpieceDisplay.product_name}</h2>
          </div>
        ));
    const prom =
      this.props.items.length > 0 &&
      this.props.items
        .filter(prom => prom.product_category === "prom")
        .map(promDisplay => (
          <div className="photo-holder-container">
            <img src={promDisplay.product_image} alt="promDisplay" />

            <div
              className="overlay-gal"
              onClick={() => this.setImage(promDisplay)}
            />
            <h2>{promDisplay.product_name}</h2>
          </div>
        ));
    const other =
      this.props.items.length > 0 &&
      this.props.items
        .filter(other => other.product_category === "other")
        .map(otherDisplay => (
          <div className="photo-holder-container">
            <img src={otherDisplay.product_image} alt="otherDisplay" />

            <div
              className="overlay-gal"
              onClick={() => this.setImage(otherDisplay)}
            />
            <h2> {otherDisplay.product_name}</h2>
          </div>
        ));

    return (
      <>
        <NavBarGallery />
        <div className="occ-gallery">
          <h1>special occasions</h1>
          <div className="link-header">
            <Link smooth to="/gallery/occasions#wedding">
              wedding
            </Link>
            <Link smooth to="/gallery/occasions#centerpiece">
              centerpiece
            </Link>
            <Link smooth to="/gallery/occasions#prom">
              prom
            </Link>
            <Link smooth to="/gallery/occasions#other">
              other
            </Link>
          </div>
          <div className="occ-photo-container">
            <section id="wedding">
              <h2>wedding</h2>
              <div className="photo-container">{wedding}</div>
            </section>
            <section id="centerpiece">
              <h2>centerpiece</h2>
              <div className="photo-container">{centerpiece}</div>
            </section>
            <section id="prom">
              <h2>prom</h2>
              <div className="photo-container">{prom}</div>
            </section>
            <section id="other">
              <h2>other</h2>
              <div className="photo-container">{other}</div>
            </section>

            <OccasionModal
              show={this.state.modalShow}
              onHide={modalClose}
              selectedid={this.state.imageClicked}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  let { items } = state;
  return {
    items
  };
};

export default connect(
  mapStateToProps,
  { getItems }
)(GalOccasion);
