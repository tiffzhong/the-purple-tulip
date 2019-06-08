import React, { Component } from "react";

import { connect } from "react-redux";
import { getItems } from "../../dux/reducer";
import Nav from "./AdminNav";

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.getAllItems();
  }
  getAllItems = () => {
    this.props.getItems().then(res => {
      console.log(res);
      return this.setState({ items: res.value });
    });
  };

  render() {
    console.log(this.props);
    let { user, items } = this.props;
    // console.log(this.state);
    return (
      <>
        <Nav />
        <div className="inquiry-container">Hello {user}</div>
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
