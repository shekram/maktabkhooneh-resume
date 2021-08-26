import React, { Component } from "react";

import "./navbar.css";

import data from "../data.json";

class Navbar extends Component {
 
    state = {
        color: "light",
      };
    
  changecolor = () => {
    this.setState({
      color: this.state.color === "light" ? "dark" : "light",
    });
  };

  scrollfnc = (divname) => {
    divname.scrollIntoView();
  };

  render() {

    return (
      <div className="navigation">
        <div>
          <button
            onClick={() => {
              this.changecolor();
            }}
          >
            <img src="images/light.png" />
          </button>
        </div>

        <div>
          <button>
            <a href="#skills">
              <h3>Skills</h3>
            </a>
          </button>
          <button>
            <a href="#about">
              <h3>About</h3>
            </a>
          </button>
          <button>
            <a href="#home">
              <h3>Home</h3>
            </a>
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
