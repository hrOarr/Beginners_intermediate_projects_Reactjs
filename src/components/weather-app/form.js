import React, { useState } from 'react';
import './form.css';

const Form = ({handleInput}) =>{
	const [city, setCity] = useState('Chittagong');
	const [country, setCountry] = useState('BD');
	const [error, setError] = useState('');

	const handleChange = (e)=>{
		e.preventDefault();
		if(e.target.id==="city"){
			setCity(e.target.value);
		}
		else{
			setCountry(e.target.value);
		}
	}

	const handleSubmit = (e)=>{
		e.preventDefault();
		if(city==='' || country===''){
			setError("City or country can't be null!");
			return;
		}
		handleInput(city, country);
	}

	return (
		<div>
		  <form onSubmit={handleSubmit}>
		    <div className="row">
		      <div className="col-md-6">
		         <input
		         type="text"
		         value={city}
		         id="city"
		         placeholder="Enter city name"
		         onChange={handleChange} 
		         />
                </div>
                <div className="col-md-6">
                   <input
                   type="text"
                   value={country}
                   id="country"
                   placeholder="Enter country name"
                   onChange={handleChange}
                   />
                </div>
              </div>
              <div className="d-grid text-center shadow-lg">
                 <button className="btn-lg">Submit</button>
              </div>
              <div className="error text-center">{error}</div>
		  </form>
		</div>
	);
}

export default Form;