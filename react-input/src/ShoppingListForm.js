import React, { Component } from 'react'

class ShoppingListForm extends Component {
    constructor(props){
        super(props);
        this.state = { name: '', qty: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({name: '', qty: ''})
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        id='name'
                        type='name'
                        name='name'
                        placeholder='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <label htmlFor='qty'>QTY:</label>
                    <input 
                        id='qty'
                        type='name'
                        name='qty'
                        placeholder='qty'
                        value={this.state.qty}
                        onChange={this.handleChange}
                    />
                    <button>ADD ITEM</button>
                </form>
            </div>
        )
    }
}

export default ShoppingListForm;