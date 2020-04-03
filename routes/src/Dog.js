import React, { Component } from 'react'
import dog from './dog.jpg'

class Dog extends Component{
    render() {
        return(
            <div>
                <h1>it`s dog!</h1>
                <img src={dog} />
            </div>
        )
    }
}

export default Dog;