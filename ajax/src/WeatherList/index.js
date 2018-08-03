import React, { Component } from 'react';

const WeatherList = (props) => {

	const weatherList = props.weather.map((weather, i) => {
		console.log(weather, 'this is weather in weatherlist')
		return (
			<li key={i}>
			{weather.main}
			
			
			</li>
		)
	});
		

	
	
	return (
		<div class="weatherContainer">
			<h2>Todays weather in Denver is:</h2>
			<ul>{weatherList}</ul>
		</div>
	)
}

export default WeatherList;