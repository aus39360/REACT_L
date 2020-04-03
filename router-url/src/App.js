import React from 'react';
import './App.css';
import Food from './Food';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/food/:name' render={(routeProps)=> <Food {...routeProps} />} />
      </Switch>
    </div>
  );
}

export default App;
