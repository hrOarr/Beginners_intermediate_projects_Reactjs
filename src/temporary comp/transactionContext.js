import React, {useState, createContext} from 'react';

export const TransactionContext = createContext();

const TransactionProvider = (props)=>{
	const [transations, setTransactions] = useState([
	{
		id: 1,
		text: 'Salary',
		amount: 400
	},
	{
		id: 2,
		text: 'Tution',
		amount: 200
	},
	{
		id: 3,
		text: 'Marketing',
		amount: -300
	}
	]);
	return (
		<TransactionContext.Provider value={[transations, setTransactions]}>
		  {props.children}
		</TransactionContext.Provider>
	);
}

export default TransactionProvider;