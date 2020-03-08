class App extends React.Component {
	render() {
		return (
			<div>
				<Hello />
				<Num />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));