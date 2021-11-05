import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <a className='brand' href='/'>
              amazona
            </a>
          </div>
          <div>
            <a href='/cart'>Cart</a>
            <a href='/signin'>Sign In</a>
          </div>
        </header>
        <main>
          <Switch>
            <Router exact path='/'>
              <HomeScreen />
            </Router>
            <Route path='/product/:id'>
              <ProductScreen />
            </Route>
          </Switch>
        </main>
        <footer className='row center'>All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
