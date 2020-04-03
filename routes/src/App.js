import React from 'react';
import './App.css';
import Homa from './Homa';
import Cat from './Cat';
import Dog from './Dog';
import { Switch, Route } from 'react-router-dom';
import Navabar from './Navabar';
import Animals from './Animals';

function App() {
  return (
    <div className="App">
      <h1>ANIMALS</h1>
      <Navabar />
      <Switch>
      <Route exact path='/' component={Animals} />
        <Route exact path='/homa' component={Homa} />
        <Route exact path='/dog' component={Dog} />
        <Route exact path='/cat' component={Cat} />
      </Switch>
    </div>
  );
}

export default App;
