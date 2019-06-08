import React, { Component, createContext } from "react";
import axios from "axios";

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      inq: []
    };
  }

  componentDidMount() {}

  getUserName() {
    axios.get();
  }
  render() {
    return <div className="inquiry-container">Test can you see this</div>;
  }
}

export default AdminHome;
