import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component{
    constructor(props) {
        super(props);
        this.handleLOgin = this.handleLOgin.bind(this)
    }
    handleLOgin() {
        alert('LOGED!')
        this.props.history.push('/food/porno')
    }
    render() {
        return(
            <div className='navbar'>
                <button onClick={this.handleLOgin}>Log in</button>
                <button onClick={this.props.history.goBack}>go back</button>
            </div>
        )
    }
}

export default withRouter(Navbar);