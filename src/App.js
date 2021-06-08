import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Index from './components/to-do/index';
import WeatherUpdate from './components/weather-app/weather-update';
import CoronaTracker from './components/corona-tracker/corona-tracker';
import BinarySearch from './components/searching/BinarySearch';
import './App.css';

const App = ()=> {

	return (
		<div className="container">
		     <BrowserRouter>
			   <Switch>
			     // routes
			     <Route path="/" component={Home} exact />
			     <Route path="/binary-search" component={BinarySearch} exact />
			     <Route path="/to-do" component={Index} exact />
			     <Route path="/corona-tracker" component={CoronaTracker} exact />
			     <Route path="/weather-update" component={WeatherUpdate} exact />

			   </Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
