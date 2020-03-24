import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email:'', password:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        alert(`YOUR NAME: ${this.state.name}`);
        this.setState({name:''});
    }
    handleChange(e) {
        this.setState(
            {[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div>
                <h1>FORM!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>USER NAME: </label>
                    <input 
                        id='username'
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange} 
                    />
                    <button>Submit!</button>
                </form>
                <h1>FFFFORRRMMMMM!!!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='email'
                        name='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.handleChange} 
                    />
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.handleChange} 
                    />
                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

export default Form;