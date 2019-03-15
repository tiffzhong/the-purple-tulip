import React, { Component } from "react";
import axios from "axios";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  login = () => {
    axios.get("/auth/authorize_user");
  };
  render() {
    return <div>Gallery</div>;
  }
}
export default Gallery;
