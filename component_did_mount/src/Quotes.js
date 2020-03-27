import React, { Component } from 'react'
import axios from 'axios'
import './Quotes.css'

class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: '', loader: false}
    }
    componentDidMount() {
        axios.get('https://api.github.com/zen').then(response => (
            setTimeout(() => {
                this.setState({quote: response.data, loader: true})
            }, 3000)
        ))
    }
    render() {
        return(
            <div>
                {this.state.loader ? 
                (<div>
                    <h1>quotes...</h1>
                    {this.state.quote}
                </div>)
                :
                (<div class="lds-ripple"><div></div><div></div></div>)
                }
            </div>
        )
    }
}

export default Quotes;