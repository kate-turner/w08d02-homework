import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			username: "",
			password: "",
		}
	}

	handleChange = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.login(this.state.username);
	}
  
  render() {
  	console.log(this.state, ' this state')
    return (
      <div className="App">
       <h1> Strom Tracker </h1>

      <form onSubmit={this.handleSubmit}>
				<input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
				<input type="text" name="password"  placeholder="password" value={this.state.password} onChange={this.handleChange}/>
				<input type="submit" value="Submit"/>
			</form>
      </div>
    );
  }
}

export default Login;
