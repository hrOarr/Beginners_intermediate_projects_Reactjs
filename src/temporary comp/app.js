import React, {useState, useEffect, useCallback} from 'react';
import Header from './components/header';
import Transactions from './components/transactions';
import TransactionProvider from './components/transactionContext';
import CurrentBalance from './components/CurrentBalance';
import AddTransaction from './components/addTransaction';
import './App.css';

const App = ()=> {
	
	return (
		<TransactionProvider>
			<div className="container">
			  <div className="header">
				  <Header />
				  <CurrentBalance />
			  </div>

			  <div className="main">
			    <div className="flex-left">
			      <Transactions />
			    </div>
			    <div className="flex-right">
			      <AddTransaction />
			    </div>
			  </div>
			</div>
		</TransactionProvider>
	);
}

export default App;
