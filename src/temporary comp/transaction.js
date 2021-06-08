import React from 'react';

const Transaction = (props)=>{
	const {text, amount} = props.transaction;
	console.log(props);
	return (
		<ul>
		  <li>{text} : {amount}</li>
		</ul>
	);
}

export default Transaction;