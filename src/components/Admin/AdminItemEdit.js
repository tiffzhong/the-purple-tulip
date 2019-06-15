import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setUser, updateItem, getItem } from "../../dux/reducer";
import "./Admin.scss";
import "react-router-modal/css/react-router-modal.css";
import axios from "axios";
import { Link } from "react-router-dom";
class EditAndDeleteModal extends Component {
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

  componentDidMount() {
    if (this.props.match.params.id) {
      axios
        .get(`/api/product/${this.props.match.params.id}`)
        .then(res => {
          console.log(res, "res");
          return this.props.getItem(res.data);
        })
        .then(() => {
          this.setState({
            product_name: this.props.item.product_name,
            product_size: this.props.item.product_size,
            product_category: this.props.item.product_category,
            product_price: this.props.item.product_price,
            product_description: this.props.item.product_description,
            product_image: this.props.item.product_image
          });
        })
        .catch(error => console.log(error));
    }
  }
  render() {
    console.log(this.props, "edit");
    const { updateItem } = this.props;
    // const {
    //   product_name,
    //   product_size,
    //   product_category,
    //   product_price,
    //   product_description,
    //   product_image
    // } = this.state;
    // const { id } = this.props.item;
    return (
      <>
        <h1> Edit Item</h1>

        <form
          className="admin-create-form"
          onSubmit={event => this.onSubmit(event)}
        >
          <div>
            <h4>Item Name</h4>
            <input
              name="product_name"
              type="text"
              value={this.state.product_name}
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div>
            <h4>Item Size</h4>
            <select
              name="product_size"
              value={this.state.product_size}
              onChange={event => this.handleChange(event)}
            >
              <option value="" selected hidden>
                Select Size
              </option>
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
              value={this.state.product_category}
              onChange={event => this.handleChange(event)}
            >
              <option value="" selected hidden>
                Select Category
              </option>
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
              value={this.state.product_price}
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div>
            <h4>Description</h4>
            <textarea
              name="product_description"
              value={this.state.product_description}
              onChange={event => this.handleChange(event)}
            />
          </div>
          <div>
            <h4>Image Link</h4>
            <input
              name="product_image"
              type="text"
              value={this.state.product_image}
              onChange={event => this.handleChange(event)}
            />
          </div>
        </form>

        <Link to="/admin/home">
          <Button
            onClick={() =>
              updateItem(
                this.props.item.id,
                this.state.product_name,
                this.state.product_size,
                this.state.product_category,
                this.state.product_price,
                this.state.product_description,
                this.state.product_image
              )
            }
          >
            Save
          </Button>
        </Link>
      </>
    );
  }
}

const mapStateToProps = state => {
  let { user, item } = state;
  return {
    user,
    item
  };
};

export default connect(
  mapStateToProps,
  { setUser, updateItem, getItem }
)(EditAndDeleteModal);
