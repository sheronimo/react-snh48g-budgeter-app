import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [options, setOptions] = useState({
		budget: 0,
		selectedCurrency: ''
	});

	const [results, setResults] = useState({
		yuan: 0,
		votes: 0
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	function handleChange(e) {
		const { name, value } = e.target;
		setOptions((prevOptions) => {
			return {
				...prevOptions,
				[name]: value
			};
		});
	}

	function handleSubmit(e) {
		e.preventDefault();

		setResults(() => ({
			yuan: options.budget * 6.71,
			votes: Math.floor((options.budget * 6.71) / 35)
		}));

		setIsSubmitted(true);
	}

	return (
		<div className='card round-corner'>
			<h1 className='title'>SNH48 Vote Budgeter</h1>
			<form className='form' onSubmit={handleSubmit}>
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
				<button className='submit round-corner'>Submit</button>
			</form>
			{isSubmitted && (
				<ul className='results round-corner'>
					<li className='result'>
						<span>Amount in CNY:</span>
						<span>&#x00A5;{results.yuan}</span>
					</li>
					<li className='result'>
						<span>Votes:</span>
						<span>{results.votes}</span>
					</li>
				</ul>
			)}
		</div>
	);
}

export default App;
