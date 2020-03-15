import React, { Component } from 'react'
import Ball from './ball'
import './lotto.css'

class Lotto extends Component {
    static defaultProps = {
        title: 'Lotto',
        maxBall: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.maxBall }) }
    }
    generate() {
        this.setState(curState => ({
          nums: curState.nums.map(
            n => Math.floor(Math.random() * this.props.maxNum) + 1
          )
        }));
    }
    handleClick = () => {
        this.generate();
    }
    render() {
        return(
          <section className='lottery'>
              <h1>{this.props.title}</h1>
              <div>
                {this.state.nums.map(n => <Ball num={n}/>)}
              </div>
              <button onClick={this.handleClick}>GOOOOOOOO!</button>
          </section>
        )
    }
}

export default Lotto;