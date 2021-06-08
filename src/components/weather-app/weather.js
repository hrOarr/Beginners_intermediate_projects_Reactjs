import React from 'react';
import './weather.css';

const calCelcius = (f)=>{
	return (f-273.15).toFixed(2);
}

const Weather = ({data:{weather, main}, city, country}) =>{
	if(!weather){
		return "Loading.......";
	}
	if(city===''){
		city="Chittagong";
		country="BD";
	}
	const {temp, feels_like, temp_min, temp_max} = main;
	const row = weather[0];
	const {description} = row;
	console.log(weather)
	return (
		<div className="container">
		  <div className="row">
		     <div className="col-md-12">
			    <div className="card card1 shadow-lg p-4">
			      <h4 className="text-center">{city}, {country}</h4>
			      <h4 className="text-muted text-center">Current</h4>
			      <h2 className="text-center">{calCelcius(temp)}&deg;</h2>
			      <h4 className="text-muted text-center">Feels like</h4>
			      <h2 className="text-center">{calCelcius(feels_like)}&deg;</h2>

			      <div className="d-flex justify-content-between">
			        <h2>{calCelcius(temp_min)}&deg;</h2>
			        <h2 className="ml-auto">{calCelcius(temp_max)}&deg;</h2>
			      </div>

			      <h2 className="text-center text-muted">{description}</h2>
			    </div>
		     </div>
		  </div>
		</div>
	);
}

export default Weather;