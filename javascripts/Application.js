import React, { Component } from 'react';
import SpringContainer from './SpringContainer';
import AddSprint from './AddSprint';
import './App.css';


class Application extends Component {

	constructor(props) {
		super(props);
	}

	render() {
    let logoImg = "http://www.flamesoftheforest.com.au/assets/Uploads/FOTF-arrival-flame-trench-RS.jpg";
		return(
      <div className="App">
        <div className="App-header">
          <img src={logoImg} className="App-logo" alt="logo" />
          <h2>Burn up Chart</h2>
        </div>
        <p className="App-intro"> </p>
        <SpringContainer/>
      </div>  			
			);
	}
}	

export default Application;