import { useState, useEffect } from 'react';
import './App.css';

function App() {
	// Other variables
	const URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';

	// State variables
	const [options, setOptions] = useState({
		budget: 0,
		selectedCurrency: ''
	});
	const [results, setResults] = useState({
		yuan: 0,
		votes: 0
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [currencies, setCurrencies] = useState([]);

	// Fetch currencies
	useEffect(() => {
		fetch(`${URL}/currencies.min.json`)
			.then((res) => res.json())
			.then((data) => {
				setCurrencies([...Object.keys(data)]);
			});
	}, []);

	// Handle changes in textbox content
	function handleChange(e) {
		const { name, value } = e.target;
		setOptions((prevOptions) => {
			return {
				...prevOptions,
				[name]: value
			};
		});
	}

	// Handle form submission
	function handleSubmit(e) {
		e.preventDefault();

		fetch(`${URL}/currencies/${options.selectedCurrency}/cny.json`)
			.then((res) => res.json())
			.then((data) => {
				setResults(() => ({
					yuan: (options.budget * data.cny).toFixed(2),
					votes: Math.floor((options.budget * data.cny) / 35)
				}));
			});

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
					{currencies.map((currency) => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
				</select>
				<button className='submit round-corner'>Submit</button>
			</form>
			{isSubmitted && (
				<div className='results round-corner'>
					<ul>
						<li className='result'>
							<span>Amount in CNY:</span>
							<span>&#x00A5;{results.yuan}</span>
						</li>
						<li className='result'>
							<span>Votes:</span>
							<span>{results.votes}</span>
						</li>
					</ul>
					{results.yuan < 35 && (
						<p className='disclaimer'>
							You need a minimum of &#x00A5;35 for one vote.
						</p>
					)}
				</div>
			)}
		</div>
	);
}

export default App;
