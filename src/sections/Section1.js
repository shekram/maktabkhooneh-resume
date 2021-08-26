import React, { Component } from "react";

import Fullpage from "../components/Fullpage";
import Images from "../components/images";

import data from "../data.json";

class Section1 extends Component {
  

  render() {

    const {bc} = this.props;
    

    if (bc == 'light' )
    {
      var color = 'DarkTurquoise'
      var textcolor = 'black'
    } 
    else
    {
      var color = 'DimGray'
      var textcolor = 'white'
    }

    return (
      <div id="home"
        style={{
          backgroundColor:  color, color: textcolor,
        }}
      >
        <Fullpage >
          <h1 className="title">{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <div className="cards-wrapper">
            {data.sections[2].items.map((eachmedia) => {
              return <Images media={eachmedia} />;
            })}
          </div>
        </Fullpage>
      </div>
    );
  }
}

export default Section1;
