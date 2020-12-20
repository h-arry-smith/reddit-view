import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {NavBar} from './app/NavBar'
import {Home} from './app/Home'

import {DetailPost} from './features/detailpost/DetailPost'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />        

        <main>
          <Switch>
            <Route path="/post/:postId">
              <DetailPost />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
