import React, {useState, useEffect} from 'react';
import './BinarySearch.css';

const random = (len, max) =>{
	return Array(len).fill().map(()=> Math.round(Math.random()*max));
}

const BinarySearch = ()=>{
	const [Arr, setArr] = useState([]);
	const [sorted, setSorted] = useState([]);
	const [path, setPath] = useState([]);
	const [value, setValue] = useState('');
	const [found, setFound] = useState(false);
	const speed = 900;

	const setArray = ()=>{
		const tmp = random(15, 99);
		setArr([...tmp]);
		tmp.sort(function(a,b){return a-b;});
		setSorted(tmp);
	}

	useEffect(()=>{
		setArray();
	}, []);

	const handleRandom = ()=>{
		setArray();
	}

	const handleStart = ()=>{
		let path = [],f = 0,lo = 1,hi = sorted.length,md,x = value;
		while(lo<=hi){
			md = (lo+hi)>>1;
			if(sorted[md-1]==x){
				path.push(md-1);
				f = 1;break;
			}
			else if(sorted[md]>x){
				hi = md-1;
				path.push(md-1);
			}
			else{
				lo = md+1;
				path.push(md-1);
			}
		}
		setFound(f);

		setPath([...path]);
		document.getElementById("start_btn").disabled = true;
		document.getElementById("random_btn").disabled = true;

		for(let i=0; i<path.length;i++){
			setTimeout(()=>{
				const cur = path[i];
				const element = document.getElementById(`key-${cur}`);
				element.className = "item-vis";
				console.log(element)
			}, speed*i)
		}

		setTimeout(()=>{
			const element = document.getElementById("result_id");
			element.classList.remove("display_none");
		}, speed*(path.length))
	}

	const Init = () =>{
		for(let i=0; i<path.length;i++){
			setTimeout(()=>{
				const cur = path[i];
				const element = document.getElementById(`key-${cur}`);
				element.classList.remove("item-vis");
			}, i)
		}
		document.getElementById("start_btn").disabled = false;
		document.getElementById("random_btn").disabled = false;
		const element = document.getElementById("result_id");
		element.classList.add("display_none");
	}

	const handleChange = (e) =>{
		e.preventDefault();
		setValue(e.target.value);
	}

	return (
		<div className="binary_search">
		  <h1>Binary Search</h1>
		  <div className="top">
		     <div className="top_first">
		       <span><button id="random_btn" onClick={handleRandom}>Generate Random</button></span>
		    	</div>
		    	<div className="top_second">
			    	<ul>
			    	{
			    	  Arr.length!=0 && Arr.map((x,id)=>(
			    	  	<li key={id}><button>{x}</button></li>
			    	  ))
			    	}
			    	</ul>
		    	</div>
		  </div>

		  <div className="bottom">
		    <div className="bottom_first">
		    <span>
			    <form>
			      <label>Enter search key </label>
			      <input type="number" value={value} onChange={handleChange}></input>
			      <button id="start_btn" onClick={handleStart}>Start</button>
			    </form>
		    </span>
		    <span><button onClick={Init}>Refresh</button></span>
		    </div>
		    <div className="bottom_second">
			    <ul>
			    	{
			    	  sorted.length!=0 && sorted.map((x,id)=>(
			    	  	<li key={id} id={`key-${id}`}><button>{x}</button></li>
			    	  ))
			    	}
			    	</ul>
		    	</div>
		  </div>

		  <div id="result_id" className="display_none result">
		    {
		    	found? <h3>Search key is found!</h3>
		    	:(
		    	 <h3>Search key is not found!</h3>
		    	)
		    }
		  </div>
		</div>
	);
}

export default BinarySearch;