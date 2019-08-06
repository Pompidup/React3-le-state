import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from "./Quote";
import Lamp from './Lamp';

class App extends Component {
  constructor() {
    super();
    this.state = {
       working: false
    };
};

_working = () => {
  this.setState({working: !this.state.working});
};

  render() {

    let classLogo = 'App-logo';

    if (this.state.working) {
      classLogo = 'App-logo2';
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={classLogo} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button 
          onClick={this._working}>
            Go works
        </button>
        <Lamp on />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;