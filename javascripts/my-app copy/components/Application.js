import React, { Component } from 'react';
import SpringContainer from './SpringContainer';
import AddSprint from './AddSprint';
import './App.css';


class Application extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
      <div className="App">
        <div className="App-header">
          <img src="" className="App-logo" alt="logo" />
          <h2>Burn up Chart</h2>
        </div>
        <p className="App-intro"> </p>
        <SpringContainer/>
      </div>  			
			);
	}
}	

export default Application;