import { useState, useEffect } from 'react';
import './Form.css';

const Form = (props) => {
	const [currencies, setCurrencies] = useState([]);

	// Fetch currencies
	useEffect(() => {
		fetch(`${props.url}/currencies.min.json`)
			.then((res) => res.json())
			.then((data) => {
				setCurrencies([...Object.keys(data)]);
			});
	}, []);

	return (
		<form className='form' onSubmit={props.handleSubmit}>
			<label>Enter your budget:</label>
			<input
				type='number'
				className='budget round-corner'
				placeholder='Budget...'
				name='budget'
				value={props.budget}
				onChange={props.handleChange}
			/>
			<select
				className='currency round-corner'
				id='selectedCurrency'
				name='selectedCurrency'
				value={props.selectedCurrency}
				onChange={props.handleChange}>
				<option value='' disabled hidden>
					---Choose---
				</option>
				{currencies.map((currency) => (
					<option key={currency} value={currency}>
						{currency}
					</option>
				))}
			</select>
			<button className='submit round-corner'>Submit</button>
		</form>
	);
};

export default Form;
