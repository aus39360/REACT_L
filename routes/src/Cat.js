import React, { Component } from 'react'
import cat from './cat.jpeg'

class Cat extends Component{
    render() {
        return(
            <div>
                <h1>it`s cat!</h1>
                <img src={cat} />
            </div>
        )
    }
}

export default Cat;