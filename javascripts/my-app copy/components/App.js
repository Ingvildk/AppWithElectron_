import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleName = this.handleName.bind(this);
  }

  handleName(event) {
    event.preventDefault();
    console.log("handleName is running");
    this.setState({value: event.target.value});
  }

  render() {
    let imgLogo = "http://www.fresnofirst.org/wp-content/uploads/2015/01/Flames-BG-0001-600x400@2x.jpg";
    return (
      <div className="App">
        <div className="App-header">
          <img src={imgLogo} className="App-logo" alt="logo" />
          <h2>Burn up Chart</h2>
        </div>
        <p className="App-intro">
          <br/>
          Team name <input type="text" onChange={this.handleName} />
          <br/>
          <br/>
          Capacity <input />
          <br/>
          <br/>
          <button>Submit</button>
        </p>
      </div>
    );
  }
}

export default App;
