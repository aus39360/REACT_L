import React, { Component } from 'react'

import Component2 from './Component2'


class Component1 extends Component {
    render() {
        return(
            <div>
                <h1>Comp1</h1>
                <Component2 />
            </div>
        )
    }
}

export default Component1