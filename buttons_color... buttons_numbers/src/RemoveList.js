import React, { Component } from 'react';
import NumberItem from './NumberItem.js'

class RemoveList extends Component {
    constructor(props) {
        super(props);
        this.state = { nums: [ 1, 2, 3, 4, 5 ]}
    }
    remove(num) {
        this.setState(st => ({nums: st.nums.filter(n => n !==num )}) )
    }
    render() {
        let numS = this.state.nums.map(n => <NumberItem key={n} value={n} remove={() => this.remove(n)}/>)
        return(
            <div>
                <h1>First Numbers</h1>
                <ul>{numS}</ul>
            </div>
        )
    }
}

export default RemoveList;