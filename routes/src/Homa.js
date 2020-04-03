import React, { Component } from 'react'
import hamster from './hamster.jpg'

class Homa extends Component{
    render() {
        return(
            <div>
                <h1>it`s hamster!</h1>
                <img src={hamster} />
            </div>
        )
    }
}

export default Homa;