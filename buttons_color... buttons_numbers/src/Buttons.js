import React, { Component } from 'react'
import './Buttons.css'

class Buttons extends Component {
    static defaultProps = {
        colors: ['#e84118', '#fbc531', '#192a56', '#e84393']
    }
    constructor(props) {
        super(props);
        this.state = { color: 'cyan'}
    }
    show(newColor) {
        this.setState({color: newColor })
    }
    render() {
        return(
            <div className='buttonList' style={{ backgroundColor: this.state.color}}>
                {this.props.colors.map(c => 
                <button style={{ backgroundColor: c }} className='buton' onClick={this.show.bind(this, c)}>CLick!!!</button>)}
            </div>
        )
    }
}

export default Buttons;