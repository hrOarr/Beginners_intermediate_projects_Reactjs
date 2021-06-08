import React, { useState, useEffect } from 'react';
import {fetchDailyData} from './api';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
	const [dailyData, setDailyData] = useState([]);

	useEffect(()=>{
		const fetchApi = async ()=>{
			setDailyData(await fetchDailyData());
		}
		fetchApi();
	}, []);

	const BarChart = (
		country!==''
		? (
			<Bar
			  data={{
			  	labels: ['Infected', 'Recovery', 'Deaths'],
			  	datasets: [{
			  		label: 'People',
			  		data: [confirmed.value, recovered.value, deaths.value],
			  		backgroundColor: [
			  		  'rgba(0, 0, 255, 0.5)',
			  		  'rgba(0, 255, 0, 0.5)',
			  		  'rgba(255, 0, 0, 0.5)',
			  		],
			  	}]
			  }}
			/>
		)
		: (<div>Loading.....</div>)
	);

	const LineChart = (
		dailyData.length?
		(
			<Line 
			 data={{
			 	labels: dailyData.map(({date})=> date),
			 	datasets: [{
			 		data: dailyData.map(({confirmed})=> confirmed),
			 		label: 'Infected',
			 		borderColor: '#3333ff',
			 		fill: true,
			 	},{
			 		data: dailyData.map(({deaths})=> deaths),
			 		label: 'Deaths',
			 		borderColor: 'red',
			 		backgroundColor: 'rgba(255, 0, 0, 0.5)',
			 		fill: true,
			 	}
			 	],
			 }}
			/>
		)
		: (<div>Loading....</div>)
	);

	console.log(country)

	return (
		<>
		 {
		 	country!==''
		 	? (<>{BarChart}</>)
		 	: (<>{LineChart}</>)
		 }
		</>
	);
}

export default (Chart);