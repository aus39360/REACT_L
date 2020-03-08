class Hello extends React.Component {
	static defaultProps = {
		from : 'Anonim',
		bangs : 1
	}
	render() {
		let bang = "!".repeat(this.props.bangs);
		return (
			<h1>Hi {this.props.to} from {this.props.from} {bang} </h1>
		)
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));