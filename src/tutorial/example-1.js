import React, {useState} from 'react';

const countries = ['Bangladesh', 'India', 'Pakistan', 'Nepal'];

const ActionItem = ({label, action, handleChange})=>{
	return (
		<li>{label}
		<a href='#'
		onClick={(e)=>{
			e.preventDefault();
			handleChange(label);
		}}
		>
		{action}
		</a>
		</li>
	);
}

const Example1 = () => {
	const [selected, setSelected] = useState([]);

	function handleAdd(country){
		setSelected(selected.concat(country));
	}

	function handleRemove(country){
		const updated = selected.filter((c)=>c!==country);
		setSelected(updated);
	}

	return (
		<div className="container">
		<h3>Selected Country</h3>
		<ul>
		{
		selected.map((country)=>{
			return <ActionItem label={country} action="-" handleChange={handleRemove} />
		})
	     }
		</ul>
		<h3>All Country</h3>
		<ul>
		{
		countries.map((country)=>{
			return <ActionItem label={country} action="+"handleChange={handleAdd} />
		})
	     }
		</ul>
		</div>
	);
}

export default Example1;