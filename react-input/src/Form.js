import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email:'', password:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        alert(`YOUR NAME: ${this.state.name}`);
        this.setState({name:''});
    }
    handleChange(e) {
        this.setState({name: e.target.value})
    }
    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }
    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }
    render() {
        return (
            <div>
                <h1>FORM!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange} 
                    />
                    <button>Submit!</button>
                </form>
                <h1>FFFFORRRMMMMM!!!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={this.handleEmailChange} 
                    />
                    <input 
                        type='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={this.handlePasswordChange} 
                    />
                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

export default Form;