import React from 'react';

const FirstChild = (props)=> {
	const {setCount} = props;

	console.log("FirstChild")
	return (
		<>
		  <h3>First child</h3>
		  <button onClick={setCount}>+</button>
		</>
	);
}

export default React.memo(FirstChild);