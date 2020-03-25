import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewTodoForm extends Component{
    constructor(props) {
        super(props);
        this.state = { task:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed: false})
        this.setState({
            task:''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='1'>New Todo</label>
                <input id='1' placeholder='New Todo' type='text' name='task' value={this.state.task} onChange={this.handleChange} />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;