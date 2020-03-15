import React, { Component } from 'react'
import get from 'lodash/get'


class Coin extends Component {
    render() {
        const imgSrc = get(this.props, 'info.imgSrc')
        return(
            <img src={imgSrc} alt={this.props.info.side}/>
        )
    }
}

export default Coin;