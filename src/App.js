import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [budget, setBudget] = useState(0);
	return (
		<div className='card'>
			<h1 className='title'>SNH48 Vote Budgeter</h1>
			<form>
				<label>Enter your budget:</label>
				<input type='number'></input>
				<select>
					<option>USD</option>
				</select>
			</form>
			<ul>
				<li>
					<span>Amount in CNY:</span>
					<span>100</span>
				</li>
				<li>
					<span>Votes:</span>
					<span>10</span>
				</li>
			</ul>
		</div>
	);
}

export default App;
