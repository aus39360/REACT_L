import React, { Component } from 'react';
import Color from './Color.js';
import './BoxColors.css'

class Box extends Component {
    static defaultProps = {
        numBox: 21
    }
    render() {
        const boxes = Array.from({ length: this.props.numBox }).map(()=> (<Color />));
        return(
            <div className='boxes'>{boxes}</div>
        )
    }
}

export default Box;