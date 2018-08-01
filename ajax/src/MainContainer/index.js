import React, { Component } from 'react';
import WeatherList from '../WeatherList';

class MainContainer extends Component {
	constructor(){
		super()

		this.state = {
			weather: []
		}
	}

	getWeather = async() => {
		try {
			const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Denver&APPID=9d38de8ebcae8e1de4975eed495e64f3');
			const weatherJson = await weather.json();
			return weatherJson;
			
		} catch (err) {
			console.log(err, 'error in catch block')
			return err
		}
	}
	componentDidMount(){
		this.getWeather().then((data) => console.log(data, 'this is data'));
	}
	 	render() {
    return (
      <div>
       <h1> Hello {this.props.username} </h1>
       <h5> <WeatherList weather={this.state.weather}/> </h5>
       
      </div>
     

    );
  }
}

export default MainContainer;