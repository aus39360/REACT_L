import React from 'react';
import './App.css';
import Food from './Food';
import { Switch, Route } from 'react-router-dom';
import Meal from './Meal';
import FoodSearch from './FoodSearch';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/food/:name' render={(routeProps)=> <Food {...routeProps} />} />
        <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
        <Route exact path='/'   component={FoodSearch} />
        <Route render={() => <h1>404!!!</h1>} />
      </Switch>
    </div>
  );
}

export default App;
