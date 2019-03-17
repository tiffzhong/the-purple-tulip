import React, { Component } from "react";
import axios from "axios";
import "./Gallery.scss";
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    console.log(images[0]);

    let photos = images.map(i => {
      return (
        <>
          <img src={i.images.standard_resolution.url} alt="ig" />
        </>
      );
    });
    return (
      <div className="gallery-container">
        <section>
          <article>
            <h1>Keep up to date with my work on Instagram</h1>
            <br />
            <a href="https://www.instagram.com/thepurpletulipinc/">
              @thepurpletulipinc
            </a>
          </article>
          {photos}
        </section>
      </div>
    );
  }
}
export default Gallery;
