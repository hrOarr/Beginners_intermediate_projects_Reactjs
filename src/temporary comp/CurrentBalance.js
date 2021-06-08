import React, {useState, useContext} from 'react';
import {TransactionContext} from './transactionContext';

const CurrentBalance = ()=>{
	const [transactions, setTransactions] = useContext(TransactionContext);
	const amounts = transactions.map(trans=>trans.amount);
	const sum = amounts.reduce((total,cur)=>(total+cur),0).toFixed(2);
	return (
		<div>
		  <h3>Current Balance : {sum}</h3>
		</div>
	);
}

export default CurrentBalance;