import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [options, setOptions] = useState({
		budget: 0,
		selectedCurrency: ''
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setOptions((prevOptions) => {
			return {
				...prevOptions,
				[name]: value
			};
		});
	}

	return (
		<div className='card round-corner'>
			<h1 className='title'>SNH48 Vote Budgeter</h1>
			<form className='form'>
				<label>Enter your budget:</label>
				<input
					type='number'
					className='budget round-corner'
					placeholder='Budget...'
					name='budget'
					value={options.budget}
					onChange={handleChange}
				/>
				<select
					className='currency round-corner'
					id='selectedCurrency'
					name='selectedCurrency'
					value={options.selectedCurrency}
					onChange={handleChange}>
					<option value=''>---Choose---</option>
					<option value='USD'>USD</option>
				</select>
				<button type='submit' className='submit round-corner'>
					Submit
				</button>
			</form>
			<ul className='results round-corner'>
				<li className='result'>
					<span>Amount in CNY:</span>
					<span>100</span>
				</li>
				<li className='result'>
					<span>Votes:</span>
					<span>10</span>
				</li>
			</ul>
		</div>
	);
}

export default App;
