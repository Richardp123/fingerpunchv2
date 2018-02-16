import React, { Component } from 'react';
import './App.css';
import './styles/css/style.css';

import Background from './comps/background.js';
import Characters from './comps/characters.js';

class App extends Component {
  render() {
    return (
      <div className="App">
    <div className="gameContainer zeroCentering">
        
        <Background />
        <Characters />
        
    </div>
      </div>
    );
  }
}

export default App;
