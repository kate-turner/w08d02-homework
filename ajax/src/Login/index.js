import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="App">
       <h1> Strom Tracker </h1>

      <form>
				<input type="text" name="userName" value="" placeholder="username"/>
				<input type="text" name="password" value="" placeholder="password"/>
				<input type="submit" value="Submit"/>
			</form>
      </div>
    );
  }
}

export default Login;
