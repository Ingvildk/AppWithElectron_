import React, { Component } from 'react';

class QuarterPoints extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
	      <div className="form-group" >
	        <input type="text" className="form-control" placeholder="Quarter totoal points" />
	      </div>			
      </div>
			);
	}
}

export default QuarterPoints;