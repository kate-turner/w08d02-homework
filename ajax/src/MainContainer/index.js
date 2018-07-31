import React, { Component } from 'react';

class MainContainer extends Component {
	 	render() {
    return (
      <div className="App">
       <h1> Hello {this.props.username} </h1>
      </div>
    )
  }
}

export default MainContainer;