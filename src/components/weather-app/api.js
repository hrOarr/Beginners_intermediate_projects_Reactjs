import axios from 'axios';

export const fetchDailyData = async (city, country)=>{
	try{
		if(!city){
			city="chittagong";
			country="BD";
		}
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=c560b953fecc7df3718c57ca629fc5c1`;
		const {data} = await axios.get(url);
		return data;
	}
	catch(err){
		console.log("Error from api.js " + err);
	}
}