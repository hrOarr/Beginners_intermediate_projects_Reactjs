import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () =>{

	return (
		<div className="container">
		     <div className="row">
			  <div className="col-md-4 d-flex align-items-stretch">
			     <div className="card shadow-lg p-4">
				    <h2>To-do App</h2>
				    <p>A to-do app including pending, on-going, completed tasks</p>
				    <Link to="/to-do">Click to see</Link>
			     </div>
			  </div>
		       <div className="col-md-4 d-flex align-items-stretch">
		          <div className="card shadow-lg p-4">
				    <h2>Searching visualizer</h2>
				    <p>It includes binary search, ternary search techniques to visualize</p>
				    <Link to="/binary-search">Click to visualize</Link>
		          </div>
		       </div>
			  <div className="col-md-4 d-flex align-items-stretch">
				<div className="card shadow-lg p-4">
				    <h2>Corona Tracker</h2>
				    <p>It consists of current statistics of pandemic corona including infected, deaths, survivers</p>
				    <Link to="/corona-tracker">Click to see</Link>
				</div>
			  </div>
		     </div>

		     <div className="row" style={{marginTop: '10px'}}>
			  <div className="col-md-4 d-flex align-items-stretch">
			     <div className="card shadow-lg p-4">
				    <h2>Weather Update</h2>
				    <p>A weather app that includes weather graph and fore-casts.</p>
				    <Link to="/weather-update">Click to see</Link>
			     </div>
			  </div>
			</div>
		</div>
	);
}

export default Home;