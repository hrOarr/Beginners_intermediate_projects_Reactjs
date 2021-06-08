import React, { useState, useEffect } from 'react';
import {fetchDailyData} from './api';
import Weather from './weather';
import Form from './form';

const WeatherUpdate = () => {
	const [data, setData] = useState([]);
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');

	useEffect(()=>{
		const fetchData = async ()=>{
			setData(await fetchDailyData());
		}
		fetchData();
	}, []);

	const handleInput = (city, country)=>{
		const fetchData = async (city, country)=>{
			setData(await fetchDailyData(city, country));
		}
		fetchData(city, country);
		setCity(city);setCountry(country);
	}

	return (
		<div className="container">
		  <h2 className="text-center display-5 pb-2">Weather Update</h2>
		  <Form handleInput={handleInput}/>
		  <Weather data={data} city={city} country={country}/>
		</div>
	);
}

export default WeatherUpdate;