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
    return (
      <div className="App">
        <div className="App-header">
          <img src="http://www.evolutionnews.org/wp-content/uploads/mt-import/Fire%20and%20flames.jpg" className="App-logo" alt="logo" />
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
