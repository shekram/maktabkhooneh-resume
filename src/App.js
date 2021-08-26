
import React, { Component } from "react";

import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";

import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
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
      <div className="App">
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

        <Section1 bc={this.state.color} />
        <Section2 bc={this.state.color} />
        <Section3 bc={this.state.color} />
      </div>
    );
  }
}

export default App;
