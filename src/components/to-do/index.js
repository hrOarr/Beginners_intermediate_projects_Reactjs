import React, { useState, useEffect, useCallback } from 'react';
import AddTodo from './add-todo';
import './index.css';

const storage_key = "react-todo-app";

const Index = () =>{
	const [todos, setTodos] = useState([]);

	useEffect(()=>{
		const storageTodos = JSON.parse(localStorage.getItem(storage_key));
		if(storageTodos){
			setTodos(storageTodos);
		}
	}, []);

	useEffect(()=>{
		localStorage.setItem(storage_key, JSON.stringify(todos));
	}, [todos]);

	const handleComplete = (id)=>{
		const objId = todos.findIndex(todo => todo.id===id);
		const updated = {...todos[objId],completed: true };
		setTodos([
			...todos.slice(0,objId),
			updated,
			...todos.slice(objId+1)
		]);
	}

	const handleDelete = (id)=>{
		const updated = todos.filter(todo => todo.id!==id);
		setTodos(updated);
	}

	const addTodo = useCallback((todo)=>{
		setTodos([...todos, todo]);
	});

	return (
		<div className="container">
		  <div className="row">
		    <div className="col-md-4">
		       <div className="card shadow-lg">
			      <h2>Listed Tasks</h2>
			      <ul>
			      {
			      	todos && todos.filter(t=>t.completed===false)
			      	.map(todo=>(
			      	  <ActionItem key={todo.id} id={todo.id} label={todo.name} action="fas fa-check" handleFunc={handleComplete} />
			      	))
			      }
			      </ul>
		       </div>
		    </div>
		    <div className="col-md-4">
		        <div className="card shadow-lg">
			      <h2>Completed Tasks</h2>
			      <ul>
			      {
			      	todos && todos.filter(t=>t.completed===true)
			      	.map(todo=>(
			      	  <ActionItem key={todo.id} id={todo.id} label={todo.name} action="fas fa-times" handleFunc={handleDelete} />
			      	))
			      }
			      </ul>
		        </div>
		    </div>
		    <div className="col-md-4">
		       <div className="card shadow-lg">
			      <h2>Add task</h2>
			      <AddTodo addTodo={addTodo} />
		       </div>
		    </div>
		  </div>
		</div>
	);
}

const ActionItem = ({id, label, action, handleFunc}) =>{
	console.log(id)
	return (
		<li>{label}
		  <a onClick={(e)=>{
		   e.preventDefault();
		   handleFunc(id);
		  }}><i className={action}></i></a>
		</li>
	);
}

export default Index;