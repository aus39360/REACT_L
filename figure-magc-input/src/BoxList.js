import React, { Component } from 'react'
import Box from './Box.js';
import BoxForm from './BoxForm.js';

class BoxList extends Component{
    constructor(props){
        super(props);
        this.state = { boxes: [{ width: 100, height: 400, color:'orange'}]}
        this.create = this.create.bind(this);
    }
    create(newBox) {
        this.setState({
            boxes: [...this.state.boxes, newBox]
        })
    }
    render() {
        const boxes = this.state.boxes.map(box => (
            <Box 
                width={box.width}
                height={box.height}
                color={box.color}
            />
        )) 
        return(
            <div>
                <h1>COLOR BOX MAKER</h1>
                <BoxForm createBox={this.create}/>
                {boxes}
            </div>
        )
    }
}

export default BoxList;