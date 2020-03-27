import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './Quotes.js';
import Facebook from './Facebook.js'

function App() {
  return (
    <div className="App">
      <Quotes />
      <Facebook username='facebook'/>
      <Facebook username='colt'/>
    </div>
  );
}

export default App;
