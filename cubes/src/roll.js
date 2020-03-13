import React, { Component } from 'react';
import Cubes from './cubes'
import './roll.css'

class Roll extends Component {
    static defaultProps = {
        sides:['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props);
        this.state = { number1:'one', number2: 'one', rolling: false }
    }
    show = () => {
        const rand1 = this.props.sides[ Math.floor(Math.random() * this.props.sides.length)];
        const rand2 = this.props.sides[ Math.floor(Math.random() * this.props.sides.length)];

        this.setState ({ rolling: true});

        setTimeout(() => {
            this.setState({number1: rand1, number2: rand2})
        }, 200)

        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000)
    }
    render() {
        return(
            <div className='roll-dice'>
                <div className='roll-container'>
                    <Cubes face={this.state.number1} rolling={this.state.rolling} />
                    <Cubes face={this.state.number2} rolling={this.state.rolling} />
                </div>
                <button onClick={this.show}>{this.state.rolling ? 'Rolling...' : 'Roll Dice'}</button>
            </div>
        )
    }
}

export default Roll;