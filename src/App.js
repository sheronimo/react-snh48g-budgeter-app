import { useState, useEffect } from 'react';
import './App.css';
import Results from './components/Results';
import Form from './components/Form';

function App() {
	// Other variables
	const URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';

	// State variables
	const [options, setOptions] = useState({
		budget: 0,
		selectedCurrency: localStorage.getItem('SNHBUDGETER-savedCurrency') || ''
	});
	const [results, setResults] = useState({
		yuan: 0,
		votes: 0
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	// Save selected currency in localStorage
	useEffect(() => {
		localStorage.setItem('SNHBUDGETER-savedCurrency', options.selectedCurrency);
	}, [options]);

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
			<Form
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				budget={options.budget}
				selectedCurrency={options.selectedCurrency}
				url={URL}></Form>
			{isSubmitted && (
				<Results yuan={results.yuan} votes={results.votes}></Results>
			)}
		</div>
	);
}

export default App;
