import React, { Component } from 'react';
import NavBar from './navbar';
import Feed from './feed';
import PostDesign from './postDesign';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import homePage from './home';

import './index.css';

function App() {
  return (
    <div>
      <header>
      </header>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Feed />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
