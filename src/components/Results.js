import './Results.css';

const Results = (props) => {
	return (
		<div className='results round-corner'>
			<ul>
				<li className='result'>
					<span>Amount in CNY:</span>
					<span>&#x00A5;{props.yuan}</span>
				</li>
				<li className='result'>
					<span>Votes:</span>
					<span>{props.votes}</span>
				</li>
			</ul>
			{props.yuan < 35 && (
				<p className='disclaimer'>
					You need a minimum of &#x00A5;35 for one vote.
				</p>
			)}
		</div>
	);
};

export default Results;
