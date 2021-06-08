import React,{ useState, useEffect } from 'react';
import {fetchData} from './api';
import Chart from './chart';
import Cards from './cards';
import CountryPicker from './countryPicker';

const CoronaTracker = () =>{
	const [data, setData] = useState([]);
	const [country, setCountry] = useState('');

	useEffect(async ()=>{
		const data = await fetchData('');
		setData(data);
	}, []);

	const handleCountry = async (country)=>{
		const data = await fetchData(country);
		setCountry(country);
		setData(data);
	}

	return (
		<div className="container">
		  <Cards data={data} />
		  <CountryPicker handleCountry={handleCountry} />
		  <Chart data={data} country={country}/>
		</div>
	);
}

export default CoronaTracker;