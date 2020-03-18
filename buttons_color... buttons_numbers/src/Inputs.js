import React, { Component } from 'react';

//Карринг

class Inputs extends Component {
    state = {
        name:"",
        surname:"",
        position:"",
        gender:"",
    }

    handleChangeInput = (input) => (e) => {
       this.setState({ [input]: e.target.value })
    }
   
    render() {
        const { name, surname, position, gender } = this.state
        return(
            <div>
                <h3>name <input name="name" value={name} onChange={this.handleChangeInput('name')}/></h3>
                <h3>surname <input name="surname" value={surname} onChange={this.handleChangeInput('surname')}/></h3>
                <h3>position <input name="position" value={position} onChange={this.handleChangeInput('position')}/></h3>
                <h3>gender <input name="gender" value={gender} onChange={this.handleChangeInput('gender')}/></h3>
            </div>
        )
    }
}

export default Inputs;