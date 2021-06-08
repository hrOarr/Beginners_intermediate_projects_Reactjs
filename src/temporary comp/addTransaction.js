import React, {useState, useContext} from 'react';
import {TransactionContext} from './transactionContext';

const AddTransaction = ()=>{
	const [transations, setTransactions] = useContext(TransactionContext);
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const handleText = (e)=>{
		e.preventDefault();
		setText(e.target.value);
	}

	const handleAmount = (e)=>{
		e.preventDefault();
		setAmount(e.target.value);
	}

	const handleSubmit = (e)=>{
		e.preventDefault();
		let len = transations.length;
		setTransactions((prv)=>[...prv, {id: len+1, text: text, amount: +amount}]);
	}

	return (
		<form onSubmit={handleSubmit}>
		  <label>Enter text</label>
		  <input
		   type='text'
		   name="text"
		   value={text}
		   onChange={handleText}
		   placeholder='Enter text'
		  />
		  <label>Enter amount</label>
		  <input
		   type='number'
		   name="amount"
		   value={amount}
		   onChange={handleAmount}
		   placeholder='Enter amount'
		  />

		  <button>Submit</button>
		</form>
	);
}

export default AddTransaction;