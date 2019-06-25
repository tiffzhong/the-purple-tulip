import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./GalBouquet.scss";
import NavBarGallery from "../../NavBars/NavBarGallery";
import { connect } from "react-redux";
import { getItems } from "../../../dux/reducer";
import BouquetModal from "./BouquetModal";
import { Breadcrumb } from "react-bootstrap";
class GalBouquet extends Component {
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

    const bouquetxsmall =
      this.props.items.length > 0 &&
      this.props.items
        .filter(
          bouquet =>
            bouquet.product_category === "bouquet" &&
            bouquet.product_size === "xsmall"
        )
        .map(bouquetxsmallDisplay => (
          <div className="photo-holder-container">
            <img
              src={bouquetxsmallDisplay.product_image}
              alt="bouquetxsmallDisplay"
            />
            <div
              className="overlay-gal"
              onClick={() => this.setImage(bouquetxsmallDisplay)}
            />
            <h2>{bouquetxsmallDisplay.product_name}</h2>
          </div>
        ));

    const bouquetsmall =
      this.props.items.length > 0 &&
      this.props.items
        .filter(
          bouquet =>
            bouquet.product_category === "bouquet" &&
            bouquet.product_size === "small"
        )
        .map(bouquetsmallDisplay => (
          <div className="photo-holder-container">
            <img
              src={bouquetsmallDisplay.product_image}
              alt="bouquetsmallDisplay"
            />
            <div
              className="overlay-gal"
              onClick={() => this.setImage(bouquetsmallDisplay)}
            />
            <h2>{bouquetsmallDisplay.product_name}</h2>
          </div>
        ));
    const bouquetMedium =
      this.props.items.length > 0 &&
      this.props.items
        .filter(
          bouquet =>
            bouquet.product_category === "bouquet" &&
            bouquet.product_size === "medium"
        )
        .map(bouquetMediumDisplay => (
          <div className="photo-holder-container">
            <img
              src={bouquetMediumDisplay.product_image}
              alt="bouquetMediumDisplay"
            />

            <div
              className="overlay-gal"
              onClick={() => this.setImage(bouquetMediumDisplay)}
            />
            <h2>{bouquetMediumDisplay.product_name}</h2>
          </div>
        ));
    const bouquetLarge =
      this.props.items.length > 0 &&
      this.props.items
        .filter(
          bouquet =>
            bouquet.product_category === "bouquet" &&
            bouquet.product_size === "large"
        )
        .map(bouquetLargeDisplay => (
          <div className="photo-holder-container">
            <img
              src={bouquetLargeDisplay.product_image}
              alt="bouquetLargeDisplay"
            />

            <div
              className="overlay-gal"
              onClick={() => this.setImage(bouquetLargeDisplay)}
            />
            <h2> {bouquetLargeDisplay.product_name}</h2>
          </div>
        ));
    const bouquetXLarge =
      this.props.items.length > 0 &&
      this.props.items
        .filter(
          bouquet =>
            bouquet.product_category === "bouquet" &&
            bouquet.product_size === "xlarge"
        )
        .map(bouquetXLargeDisplay => (
          <div className="photo-holder-container">
            <img
              src={bouquetXLargeDisplay.product_image}
              alt="bouquetXLargeDisplay"
            />

            <div
              className="overlay-gal"
              onClick={() => this.setImage(bouquetXLargeDisplay)}
            />
            <h2>{bouquetXLargeDisplay.product_name}</h2>
          </div>
        ));

    return (
      <>
        <NavBarGallery />
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/gallery">gallery</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>bouquets</Breadcrumb.Item>
        </Breadcrumb>
        <div className="bouquet-gallery">
          <h1>bouquets</h1>
          <div className="link-header">
            <Link smooth to="/gallery/bouquets#xsmall">
              xsmall
            </Link>
            <Link smooth to="/gallery/bouquets#small">
              small
            </Link>
            <Link smooth to="/gallery/bouquets#medium">
              medium
            </Link>
            <Link smooth to="/gallery/bouquets#large">
              large
            </Link>
            <Link smooth to="/gallery/bouquets#xlarge">
              xlarge
            </Link>
          </div>
          <div className="bouquet-photo-container">
            <section id="xsmall">
              <h1>xsmall</h1>
              <div className="photo-container">{bouquetxsmall}</div>
            </section>
            <section id="small">
              <h1>small</h1>
              <div className="photo-container">{bouquetsmall}</div>
            </section>
            <section id="medium">
              <h1>medium</h1>
              <div className="photo-container">{bouquetMedium}</div>
            </section>
            <section id="large">
              <h1>large</h1>
              <div className="photo-container">{bouquetLarge}</div>
            </section>
            <section id="xlarge">
              <h1>xlarge</h1>
              <div className="photo-container">{bouquetXLarge}</div>
            </section>

            <BouquetModal
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
)(GalBouquet);
