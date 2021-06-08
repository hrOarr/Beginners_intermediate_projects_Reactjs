import React, { useState, useEffect } from 'react';
import {fetchCountries} from './api';
import './countryPicker.css';

const CountryPicker = ({handleCountry}) => {
	const [countries, setCountries] = useState([]);

	useEffect(async ()=>{
		const countries = await fetchCountries();
		setCountries(countries);
	}, []);

	return (
		<div className="country_picker">
		  <h2>Country Picker</h2>
		  <select className="selectpicker" defaultValue="" onChange={(e)=>handleCountry(e.target.value)}>
		    <option value="">Global</option>
		    {
		    	countries && countries.map((country, id)=>
		    		<option key={id} value={country}>{country}</option>
		    	)
		    }
		  </select>
		</div>
	);
}

export default CountryPicker;