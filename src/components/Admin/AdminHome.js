import React, { Component } from "react";

import { connect } from "react-redux";
import { getItems } from "../../dux/reducer";
import Nav from "./AdminNav";

class AdminHome extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    console.log(this.props);
    let { user } = this.props;

    const allItems = this.props.items.map(item => (
      <div>
        {item.product_category}
        {item.product_id}
        {item.product_name}
        <img src={item.product_image} alt="flowers" />
        {item.product_size}
        {item.product_description}
        {item.product_price}
      </div>
    ));
    return (
      <>
        <Nav />
        <div className="inquiry-container">
          Hello {user}
          {allItems}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  let { user, items } = state;
  return {
    user,
    items
  };
};

export default connect(
  mapStateToProps,
  { getItems }
)(AdminHome);
