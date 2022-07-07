import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [options, setOptions] = useState({
		budget: 0,
		selectedCurrency: 'USD'
	});

	return (
		<div className='card'>
			<h1 className='title'>SNH48 Vote Budgeter</h1>
			<form>
				<label>Enter your budget:</label>
				<input type='number'></input>
				<select>
					<option>USD</option>
				</select>
				<button type='submit'>Submit</button>
			</form>
			<ul className='results'>
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
