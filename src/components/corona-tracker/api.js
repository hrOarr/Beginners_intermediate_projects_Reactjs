import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
	try{
		let newUrl = url;
		if(country!==''){
			newUrl = `${url}/countries/${country}`;
		}
		const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(newUrl);
		const ret = {
			confirmed,
			recovered,
			deaths,
			lastUpdate
		};
		
		return ret;
	}
	catch(err){
		console.log("Error from api.js " + err);
	}
}

export const fetchDailyData = async () => {
	try{
		const {data} = await axios.get(`${url}/daily`);
		const retData = data.map((daily)=>({
			confirmed: daily.confirmed.total,
			deaths: daily.deaths.total,
			date: daily.reportDate
		}));
		return retData;
	}
	catch(err){
		console.log("Error from api.js " + err);
	}
}

export const fetchCountries = async () => {
	try{
		const {data: {countries}} = await axios.get(`${url}/countries`);

		return countries.map((country)=>country.name);
	}
	catch(err){
		console.log("Error from api.js " + err);
	}
}