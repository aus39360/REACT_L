class App extends React.Component {
	render() {
		return (
			<div>
				<Hello 
					to="Max" 
					from="Dan" 
					bangs="9"
				/>
				<Hello 
					to="Tolya" 
				/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));