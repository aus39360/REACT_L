import React, {Component} from 'react';
import './Pokecard.css'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
    render() {
        let imgSrc= `${POKE_API}${padToThree(this.props.id)}.png`
        return(
            <div className="Pockecard">
                <h1>{this.props.name}</h1>
                <div className='poke-img'>
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <div className="poke-data">Type: {this.props.type}</div>
                <div className="poke-data">EXP: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;