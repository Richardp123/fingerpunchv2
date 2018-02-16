import React, { Component } from 'react';
import '../styles/css/style.css';

class Characters extends Component {
    constructor(props){
        super(props);
        
    }
  render() {
    return (
      <div className="charactersComp">
        <div className="charImg"></div>
      </div>
    );
  }
}

export default Characters;
