import React, {useContext} from 'react';
import Transaction from './transaction';
import {TransactionContext} from './transactionContext';

const Transactions = ()=>{
	const [transactions, setTransactions] = useContext(TransactionContext);

	return (
		<div>
		  <h4>Transactions history</h4>
		  {
		  	transactions.map((trans)=>{
		  		return <Transaction key={trans.id} transaction={trans} />
		  	})
		  }
		</div>
	);
}

export default Transactions;