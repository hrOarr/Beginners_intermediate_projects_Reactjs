import React from 'react';

const SecondChild = ()=> {

	console.log("SecondChild");
	return (
		<>
		  <h3>Second child</h3>
		</>
	);
}

export default React.memo(SecondChild);