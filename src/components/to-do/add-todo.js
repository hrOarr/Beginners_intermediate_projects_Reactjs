import React, { useState } from 'react';
import './add-todo.css';

const TodoList = (props) =>{
	const {addTodo} = props;
	const [todo, setTodo] = useState({
		id: "",
		name: "",
		completed: false
	});

	console.log("addTodo");

	const handleChange = (e)=>{
		e.preventDefault();
		setTodo({...todo, name: e.target.value});
	}

	const handleSubmit = (e)=>{
		e.preventDefault();
		if(todo.name.trim()){
			addTodo({...todo, id: Math.random()});
		}
		// reset input
		setTodo({...todo, name: ""});
	}

	return (
		<div>
		  <form onSubmit={handleSubmit}>
		    <label>Enter task</label>
		    <input
		     type="text"
		     value={todo.name}
		     onChange={handleChange}
		     placeholder="Enter task"
		    />
		    <button>Submit</button>
		  </form>
		</div>
	);
}

export default React.memo(TodoList);