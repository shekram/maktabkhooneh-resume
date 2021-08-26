import React, { Component } from "react";
import "./images.css";
import data from "../data.json";

class Images extends Component {
  render() {
    const { media } = this.props;
    return (
      <div>
        <div className="image-div">
          <img src={media.content.image}></img>
        </div>
        <div >
          <h4>{media.content.title}</h4>
        </div>
      </div>
    );
  }
}

export default Images;
