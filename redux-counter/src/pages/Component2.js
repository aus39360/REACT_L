import React, { Component } from 'react'

import Component3 from './Component3'


class Component2 extends Component {
    render() {
        return(
            <div>
                <h1>Comp2</h1>
                <Component3 />
            </div>
        )
    }
}

export default Component2