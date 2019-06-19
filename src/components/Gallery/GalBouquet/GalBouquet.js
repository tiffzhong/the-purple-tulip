import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./GalBouquet.scss";
import NavBarGallery from "../../NavBars/NavBarGallery";
import { connect } from "react-redux";
import { getItems } from "../../../dux/reducer";

class GalBouquet extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    console.log(this.props, "items on gal");

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
            {bouquetxsmallDisplay.product_name}
            {bouquetxsmallDisplay.product_price}
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
            {bouquetsmallDisplay.product_name}
            {bouquetsmallDisplay.product_price}
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
            {bouquetMediumDisplay.product_name}
            {bouquetMediumDisplay.product_price}
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
            {bouquetLargeDisplay.product_name}
            {bouquetLargeDisplay.product_price}
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
            {bouquetXLargeDisplay.product_name}
            {bouquetXLargeDisplay.product_price}
          </div>
        ));

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
              <h2>X-Small</h2>
              <div className="photo-container">{bouquetxsmall}</div>
            </section>
            <section id="size2">
              <h2>Small</h2>
              <div className="photo-container">{bouquetsmall}</div>
            </section>
            <section id="size3">
              <h2>Medium</h2>
              <div className="photo-container">{bouquetMedium}</div>
            </section>
            <section id="size4">
              <h2>Large</h2>
              <div className="photo-container">{bouquetLarge}</div>
            </section>
            <section id="size5">
              <h2>X-Large</h2>
              <div className="photo-container">{bouquetXLarge}</div>
            </section>
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
