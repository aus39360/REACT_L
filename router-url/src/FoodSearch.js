import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FoodSearch extends Component{
    constructor(props) {
        super(props);
        this.state = { query:''}
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e) {
        this.setState({ query: e.target.value});
    }
    handleClick() {
        this.props.history.push(`/food/${this.state.query}`)
    }
    render() {
        return(
            <div>
                <h1>Search for a food!</h1>
                <input type='text' placeholder='food' onChange={this.handleChange} />
                <Link to={`/food/${this.state.query}`}>GO!</Link>
                <button onClick={this.handleClick}>save new food</button>
            </div>
        )
    }
}

export default FoodSearch;