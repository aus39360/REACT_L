import React, { Component } from 'react'
import animals from './animals.jpg'

class Animals extends Component{
    render() {
        return(
            <div>
                <h1>it`s animals!</h1>
                <img src={animals} />
            </div>
        )
    }
}

export default Animals;