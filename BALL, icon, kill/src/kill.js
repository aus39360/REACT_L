import React, { Component } from 'react'

class Kill extends Component {
    constructor(props) {
        super(props)
        this.state = { number: 0 }
        this.show3 = this.show3.bind(this)
    }
    show = () => {
        this.setState({ number: this.state.number + 1 })
    }
    show3 () {
        this.setState({ number: this.state.number + 3 })
    }
    render() {
        return(
            <div>
                <h1>Score is: {this.state.number}</h1>
                <button onClick={this.show}>One kill</button>
                <button onClick={this.show3}>Three kill</button>
            </div>
        )
    }
}

export default Kill;