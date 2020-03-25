import React, { Component } from 'react'
import uuid from 'uuid/v4';

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { height: '', width: '', color: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newBox =  {...this.state, id: uuid()}
        this.props.createBox(newBox);
        this.setState({height: '', width:'', color: ''})
    }
    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='height'>Hight</label>
                    <input 
                        type='text'
                        placeholder='Npx'
                        name='height'
                        id='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='width'>width</label>
                    <input 
                        type='text'
                        placeholder='Npx'
                        name='width'
                        id='width'
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='color'>color</label>
                    <input 
                        type='text'
                        placeholder='green'
                        name='color'
                        id='color'
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                </div>
                <button>ADD Figure!</button>
            </form>
        )
    }
}

export default BoxForm;