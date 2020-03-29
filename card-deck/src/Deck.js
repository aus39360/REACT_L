import React, { Component } from 'react'
import Card from './Card.js'
import './Deck.css'
import axios from 'axios';
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck'

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = { deck: null, drawn: [] }
        this.getCard = this.getCard.bind(this)
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`)
        this.setState({ deck: deck.data})
    }
    async getCard () {
        let id = this.state.deck.deck_id;
        if(id >= 52) return false
        try{
            let cardUrl = `${API_BASE_URL}/${id}/draw`;
            let cardRes = await axios.get(cardUrl);
            
            if(!cardRes.data.success) {
                throw new Error('No card remaning');
            } else {
                let card = cardRes.data.cards[0];
                this.setState(st =>({
                    drawn: [
                        ...st.drawn,
                        {
                            id: card.code,
                            image: card.image,
                            name: `${card.suit} of ${card.value}`
                        }
                    ]
                }))
            }
           
        } catch(err) {
            alert(err)
        }
    }

    render () {
        const cards = this.state.drawn.map(c =>(
            <Card key={c.id} name={c.name} image={c.image}/>
        ))
        return(
            <div>
                <h1 className='deck-title'>Card Diller</h1>
                <h2 className='deck-title'>REACT DEMO PROJECT</h2>
                <button className='deck-btn' onClick={this.getCard}>Get card!</button>
                <div className='deck-card'>{cards}</div>
            </div>
        )
    }
}

export default Deck;