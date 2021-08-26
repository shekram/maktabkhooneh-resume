import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import Skillcard from "../components/skillcard";

import data from "../data.json";

class Section3 extends Component {
  render() {

    const {bc} = this.props;

    if (bc == 'light' )
    {
      var color = 'mediumseagreen'
      var textcolor = 'black'
    } 
    else
    {
      var color = 'DarkGray'
      var textcolor = 'white'
    }

    return (
      <div id="skills"
        style={{
          backgroundColor:  color, color: textcolor,
        }}
      >
      <Fullpage className="third">
        
        <h2>{data.sections[1].title}</h2>
        <div className="cards-wrapper">
          {data.sections[1].items.map((eachskill) => {
            return (
              
              <Skillcard skill ={eachskill} />
            );
          })}
        </div>
      </Fullpage>
      </div>
    );
  }
}

export default Section3;
