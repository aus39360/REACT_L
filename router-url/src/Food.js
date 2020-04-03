import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class Food extends Component {
    render() {
        const name = this.props.match.params.name;
        if(/\d/.test(name)) this.props.history.push('/notfound')
        const url = `https://source.unsplash.com/1600x900/?${name}`;
        return(
            <div>
                {/\d/.test(name) ?
                <Redirect to='/notfound' /> 
                :    <div>
                        <h1>I love eat {name}</h1>
                        <img src={url} alt={name} />
                    </div>}
            </div>
        )
    }
}

export default Food;