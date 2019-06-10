import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setUser, createItem } from "../../dux/reducer";
import "./Admin.scss";
class AdminItemCreateModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      product_size: "",
      product_category: "",
      product_price: "0.00",
      product_description: "",
      product_image: ""
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const {
      product_name,
      product_image,
      product_size,
      product_category,
      product_description,
      product_price
    } = this.state;
    const { createItem, user, onHide } = this.props;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Item{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            className="admin-create-form"
            onSubmit={event => this.onSubmit(event)}
          >
            <div>
              <h4>Item Name</h4>
              <input
                name="product_name"
                type="text"
                value={product_name}
                onChange={event => this.handleChange(event)}
              />
            </div>
            <div>
              <h4>Item Size</h4>
              <select
                name="product_size"
                value={product_size}
                onChange={event => this.handleChange(event)}
              >
                <option value="xsmall">X-Small</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xlarge">X-Large</option>
              </select>
            </div>
            <div>
              <h4>Category</h4>
              <select
                name="product_category"
                value={product_category}
                onChange={event => this.handleChange(event)}
              >
                <option value="bouquet">bouquet</option>
                <option value="vase">vase</option>
                <option value="wedding">wedding</option>
                <option value="centerpiece">centerpiece</option>
                <option value="prom">prom</option>
              </select>
            </div>
            <div>
              <h4>Price</h4>
              <input
                name="product_price"
                type="text"
                value={product_price}
                onChange={event => this.handleChange(event)}
              />
            </div>
            <div>
              <h4>Description</h4>
              <textarea
                name="product_description"
                value={product_description}
                onChange={event => this.handleChange(event)}
              />
            </div>
            <div>
              <h4>Image Link</h4>
              <input
                name="product_image"
                type="text"
                value={product_image}
                onChange={event => this.handleChange(event)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              createItem(
                product_name,
                product_image,
                product_size,
                product_category,
                product_description,
                product_price
              );
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  let { user } = state;
  return {
    user
  };
};

export default connect(
  mapStateToProps,
  { setUser, createItem }
)(AdminItemCreateModal);
