function yo () {
	return Math.floor(Math.random() * 10)
}

class Num extends React.Component {
	render() {
		const num = yo ();
		let msg;
		if (num === 9) {
			msg = <div>
					<h3>EEEEEEE</h3>
					<img src="grey.gif"/>;
				</div>
		} else {
			msg = 'nooooooo';
		}
		return (
			<div>
				<h1>RANDOM NUMBER: {num} </h1>
				{/* <p>{num === 9 ? <img src="grey.gif"/> : 'nooooooo'} </p> */}    
				{msg}
			</div>
		);
	}
}

ReactDOM.render(<Num />, document.getElementById('root'));
