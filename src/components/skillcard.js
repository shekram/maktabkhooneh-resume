import React, {Component} from 'react';
import './Fullpage.css'


class Skillcard extends Component {
    render() {
        const {skill} = this.props;

        return (
            <div className="card">
                <div className="image-wrapper">
                  <img src={skill.content.image}></img>
                </div>
                <div className="skills-title">
                  <h3>{skill.content.title}</h3>
                </div>
              </div>

        )
    }
}

export default Skillcard