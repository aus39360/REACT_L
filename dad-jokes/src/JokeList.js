import React, { Component } from 'react'
import axios from 'axios';
import './JokeList.css';
import Joke from './Joke.js';
import { v4 as uuidv4 } from 'uuid';

class JokeList extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };
    constructor(props) {
        super(props);
        this.state = { jokes: JSON.parse(window.localStorage.getItem('jokes')) || [], loading: false}
        this.seenJokes = new Set(this.state.jokes.map(i => i.text));
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        if(this.state.jokes.length === 0) this.getJokes();
    }
    async getJokes() {
        try{
            let jokes = []
            while(jokes.length < this.props.numJokesToGet) {
                let res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' }})
                
                let newJoke = res.data.joke;
                if (!this.seenJokes.has(newJoke)) {
                    jokes.push({ id: uuidv4(), text: res.data.joke, votes: 0})
                } else {
                    console.log('!!!!!!')
                    console.log(newJoke)
                }
            }
            this.setState(st =>({
                jokes: [...st.jokes, ...jokes], loading: false
            }));
            window.localStorage.setItem('jokes', JSON.stringify(jokes))
        } catch(e) {
            alert(e)
            this.setState({loading:false})
        }
    }

    handleVote(id, delta) {
        this.setState(st =>({
            jokes: st.jokes.map(j =>
                j.id === id ? {...j, votes: j.votes + delta} : j
                )
        }),
        () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
        )
    }
    handleClick() {
        this.setState({ loading: true}, this.getJokes)
    }
    render() {
        if(this.state.loading === true) {
            return(
                <div className='load'>
                    <i className='far fa-8x fa-laugh fa-spin'></i>
                    <h1 className='jokeList-title'>Loading...</h1>
                </div>
            )
        }
        let jokeSort = this.state.jokes.sort((a,b)=> b.votes - a.votes)
        return(
            <div className='jokeList'>
                <div className='jokeList-sidebar'>

                    <h1 className='jokeList-title'><span>Dad</span> Jokes</h1>
                    <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                    <button onClick={this.handleClick} className='jokeList-getmore'>Fetch jokes</button>
                </div>
                <div className='jokeList-jokes'>
                    {jokeSort.map(j =>(
                        <Joke key={j.id} text={j.text} votes={j.votes} upvote={()=> this.handleVote(j.id,1)} dawnvote={()=> this.handleVote(j.id,-1)} />
                    ))}
                </div>
            </div>
        )
    }
}

export default JokeList;