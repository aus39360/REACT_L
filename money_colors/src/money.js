import React, { Component } from 'react';
import grn1 from './grn1.jpg';
import grn2 from './grn2.jpg';
import {help} from './helpers_money.js';
import Coin from './coin'

class Money extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: grn1},
            { side: "tails", imgSrc: grn2}
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin () {
        const newCoin = help(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
            }            
        })
    }
    handleClick() {
        this.flipCoin();
    }
    render() {
        return(
            <div>
                <h1>Let`s flip a coin!</h1>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Flip me!</button>
                <p>All Flip: {this.state.nFlips}. HEADS: {this.state.nHeads}, and TAILS: {this.state.nTails}</p>
            </div>
        )
    }
}

export default Money;