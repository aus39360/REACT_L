import React from 'react';
import './App.css';
import Buttons from './Buttons.js';
import Inputs from './Inputs.js';
import RemoveList from './RemoveList.js';

function App() {
  return (
    <div className="App">
      <Buttons />
      <Inputs  />
      <RemoveList />
    </div>
  );
}

export default App;
