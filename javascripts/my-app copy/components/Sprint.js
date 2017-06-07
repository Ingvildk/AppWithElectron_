import React, { Component } from 'react';

class Sprint extends Component {
	
	constructor(props) {
		super(props);
    this.handleTotalPointsSprint = this.handleTotalPointsSprint.bind(this);
	}

  handleTotalPointsSprint(event) {
    this.setState({
      TotalPoints: event.target.value
    });
    console.log(event.target.value);
  }

	render() {
    let num = this.props.num
		return (
    <div className="eachSprint">
      <p className="sprintText"><nobr>Sprint {num}</nobr></p>    
      <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Sum Points"
            ref="TotalPointsSprint"
            onChange = {this.handleTotalPointsSprint}
           />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Completed" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Avg. velocity" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Low velocity" />
        </div> 
        <div className="form-group">
          <input type="text" className="form-control" placeholder="High velocity" />
        </div>                             
      </form>
    </div>
  );
	}
}

export default Sprint;