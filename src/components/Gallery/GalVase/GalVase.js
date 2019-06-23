import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./GalVase.scss";
import NavBarGallery from "../../NavBars/NavBarGallery";
import { connect } from "react-redux";
import { getItems } from "../../../dux/reducer";
import VaseModal from "./VaseModal";
import { Breadcrumb } from "react-bootstrap";
class GalVase extends Component {
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

    const vasexsmall =
      this.props.items.length > 0 &&
      this.props.items
        .filter(
          vase =>
            vase.product_category === "vase" && vase.product_size === "xsmall"
        )
        .map(vasexsmallDisplay => (
          <div className="photo-holder-container">
            <img
              src={vasexsmallDisplay.product_image}
              alt="vasexsmallDisplay"
            />
            <div
              className="overlay-gal"
              onClick={() => this.setImage(vasexsmallDisplay)}
            />
            <h2>{vasexsmallDisplay.product_name}</h2>
          </div>
        ));

    const vasesmall =
      this.props.items.length > 0 &&
      this.props.items
        .filter(
          vase =>
            vase.product_category === "vase" && vase.product_size === "small"
        )
        .map(vasesmallDisplay => (
          <div className="photo-holder-container">
            <img src={vasesmallDisplay.product_image} alt="vasesmallDisplay" />
            <div
              className="overlay-gal"
              onClick={() => this.setImage(vasesmallDisplay)}
            />
            <h2>{vasesmallDisplay.product_name}</h2>
          </div>
        ));
    const vaseMedium =
      this.props.items.length > 0 &&
      this.props.items
        .filter(
          vase =>
            vase.product_category === "vase" && vase.product_size === "medium"
        )
        .map(vaseMediumDisplay => (
          <div className="photo-holder-container">
            <img
              src={vaseMediumDisplay.product_image}
              alt="vaseMediumDisplay"
            />

            <div
              className="overlay-gal"
              onClick={() => this.setImage(vaseMediumDisplay)}
            />
            <h2>{vaseMediumDisplay.product_name}</h2>
          </div>
        ));
    const vaseLarge =
      this.props.items.length > 0 &&
      this.props.items
        .filter(
          vase =>
            vase.product_category === "vase" && vase.product_size === "large"
        )
        .map(vaseLargeDisplay => (
          <div className="photo-holder-container">
            <img src={vaseLargeDisplay.product_image} alt="vaseLargeDisplay" />

            <div
              className="overlay-gal"
              onClick={() => this.setImage(vaseLargeDisplay)}
            />
            <h2> {vaseLargeDisplay.product_name}</h2>
          </div>
        ));
    const vaseXLarge =
      this.props.items.length > 0 &&
      this.props.items
        .filter(
          vase =>
            vase.product_category === "vase" && vase.product_size === "xlarge"
        )
        .map(vaseXLargeDisplay => (
          <div className="photo-holder-container">
            <img
              src={vaseXLargeDisplay.product_image}
              alt="vaseXLargeDisplay"
            />

            <div
              className="overlay-gal"
              onClick={() => this.setImage(vaseXLargeDisplay)}
            />
            <h2>{vaseXLargeDisplay.product_name}</h2>
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
          <Breadcrumb.Item active>vases</Breadcrumb.Item>
        </Breadcrumb>{" "}
        <div className="vase-gallery">
          <h1>vases</h1>
          <div className="link-header">
            <Link smooth to="/gallery/vases#xsmall">
              xsmall
            </Link>
            <Link smooth to="/gallery/vases#small">
              small
            </Link>
            <Link smooth to="/gallery/vases#medium">
              medium
            </Link>
            <Link smooth to="/gallery/vases#large">
              large
            </Link>
            <Link smooth to="/gallery/vases#xlarge">
              xlarge
            </Link>
          </div>
          <div className="vase-photo-container">
            <section id="xsmall">
              <h2>xsmall</h2>
              <div className="photo-container">{vasexsmall}</div>
            </section>
            <section id="small">
              <h2>small</h2>
              <div className="photo-container">{vasesmall}</div>
            </section>
            <section id="medium">
              <h2>medium</h2>
              <div className="photo-container">{vaseMedium}</div>
            </section>
            <section id="large">
              <h2>large</h2>
              <div className="photo-container">{vaseLarge}</div>
            </section>
            <section id="xlarge">
              <h2>xlarge</h2>
              <div className="photo-container">{vaseXLarge}</div>
            </section>

            <VaseModal
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
)(GalVase);
