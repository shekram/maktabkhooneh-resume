import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";

class Section2 extends Component {
  render() {

    const {bc} = this.props;

    if (bc == 'light' )
    {
      var color = 'PowderBlue'
      var textcolor = 'black'
    } 
    else
    {
      var color = 'Grey'
      var textcolor = 'white'
    }

    return (
      <div id="about"
        style={{
          backgroundColor:  color, color: textcolor,
        }}
      >
      <Fullpage className="second">
        <h2>{data.sections[0].title}</h2>
        <div className="text-card">
          {data.sections[0].items.map((p) => {
            return <h3 style= {{ textAlign:"justify", margin:"20px" }} >{p.content}</h3>;
          })}
        </div>
      </Fullpage>
      </div>
    );
  }
}

export default Section2;
