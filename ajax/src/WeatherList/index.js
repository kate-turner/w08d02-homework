import React, { Component } from 'react';

const WeatherList = (props) => {
	const weatherList = props.weather.coord;
	// 	console.log(weather.weather)

	// })
	
	return (
		<div>
			<h2>Weather</h2>
			<h4>{weatherList}</h4>
		</div>

		)
}

export default WeatherList;