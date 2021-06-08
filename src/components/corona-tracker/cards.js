import React from 'react';
import './cards.css';

const Cards = ({data}) =>{
	const {confirmed, recovered, deaths, lastUpdate} = data;

	if(!confirmed){
		return 'Loading...';
	}

	return (
		<div className="container">
		  <div className="row">
		    <div className="col-md-4 d-flex align-items-stretch">
		      <div className="card shadow-lg p-4 infected">
		        <h5 className="text-muted text-uppercase">Infected</h5>
		        <h6 className="font-weight-bold">{confirmed.value.toLocaleString()}</h6>
		        <h5 className="text-muted">{new Date(lastUpdate).toDateString()}</h5>
		        <p>Number of active cases of Covid-19</p>
		      </div>
		    </div>

		    <div className="col-md-4 d-flex align-items-stretch">
		      <div className="card shadow-lg p-4 recovery">
		        <h5 className="text-muted text-uppercase">Recoveries</h5>
		        <h6 className="font-weight-bold">{recovered.value.toLocaleString()}</h6>
		        <h5 className="text-muted">{new Date(lastUpdate).toDateString()}</h5>
		        <p>Number of recoveries of Covid-19</p>
		      </div>
		    </div>

		    <div className="col-md-4 d-flex align-items-stretch">
		      <div className="card shadow-lg p-4 deaths">
		        <h5 className="text-muted text-uppercase">Deaths</h5>
		        <h6 className="font-weight-bold">{deaths.value.toLocaleString()}</h6>
		        <h5 className="text-muted">{new Date(lastUpdate).toDateString()}</h5>
		        <p>Number of deaths of Covid-19</p>
		      </div>
		    </div>
		  </div>
		</div>
	);
}

export default Cards;