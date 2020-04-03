import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import './Navabar.css';

class Navabar extends Component {
    render() {
        return(
           <div className='Navabar'>
               <NavLink exact activeClassName='navabar-active' to='/'>Animals!</NavLink>
               <NavLink exact activeClassName='navabar-active' to='/cat'>CAT!</NavLink>
               <NavLink exact activeClassName='navabar-active' to='/dog'>Dog!</NavLink>
               <NavLink exact activeClassName='navabar-active' to='/homa'>Hamster!</NavLink>
           </div> 
        )
    }
}

export default Navabar; 