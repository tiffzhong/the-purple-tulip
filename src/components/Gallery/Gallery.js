import React, { Component } from "react";
import axios from "axios";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // images is an array of the 20 most recent instagram post including
      // caption, comments, unique id, 3 sizes of image, direct link to post on ig,
      // tags, like count, users in photo
      images: []
    };
  }

  componentDidMount = () => {
    this.getImages();
  };

  getImages = () => {
    axios.get("/api/ig/getPictures").then(res => {
      this.setState({
        images: res.data.data
      });
    });
  };
  render() {
    const { images } = this.state;

    // showing just one image so console isn't a mess
    console.log(this.state.images[0]);

    return <div>Gallery</div>;
  }
}
export default Gallery;
