import React, { Component } from "react";

class AdminItemCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      product_image: "",
      product_size: "",
      product_category: "",
      product_description: "",
      product_price: "",
      images: []
    };
  }

  render() {
    return (
      <>
        <h1>Create New Item</h1>
        <input placeholder="name" name="name" />
        <select name="size">
          <option value="xsmall">X-Small</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="xlarge">X-Large</option>
        </select>
        <select name="category">
          <option value="xsmall">bouquet</option>
          <option value="small">vase</option>
          <option value="medium">wedding</option>
          <option value="large">centerpiece</option>
          <option value="xlarge">prom</option>
        </select>
        <input placeholder="price" name="price" />
        <textarea placeholder="description" name="description" />
        <button>Save</button>
      </>
    );
  }
}
export default AdminItemCreate;
