import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Lamp from "./Lamp";
import Quotes from "./Quotes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isWorking: props.isWorking,
        header: true
      };
  }

  handleClickWorking = () => {
    this.setState({ 
      isWorking: !this.state.isWorking
    });
  };

  render() {
    const isWorking = this.state.isWorking ? 'isWorking' : 'isNotWorking';
    const logotourne = this.state.on ? "App-logo" : "App-logo2";
    
    return (
      <div className="App">
        <header className="header">
          {this.state.isWorking ? <img src={logo} className={logotourne} alt="logo" /> : <img src={logo} className="App-logo" alt="logo" />}
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Lamp on />
        <Lamp />
        <button 
            className={isWorking} 
            onClick={this.handleClickWorking}
        >{isWorking}</button>
        <Quotes />
      </div>
    );
  }
}

export default App;
