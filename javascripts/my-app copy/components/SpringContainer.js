import React, { Component } from 'react';
import Sprint from './Sprint';
import QuarterPoints from './QuarterPoints';

class SpringContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sprints: []
		};
	}

  componentWillMount() {
    for (let i= 1; i<=5;i++) {
      this.state.sprints.push(<Sprint key={i} num={i} />);
    }    
  }

	render() {
    let sprintObjects = this.state.sprints.map((x) => {
      return x; }
      );
		return (
    <div>
      <div className= "container">
              <QuarterPoints />
        {sprintObjects}
      </div>
    </div>  
      );
	}
}

export default SpringContainer;