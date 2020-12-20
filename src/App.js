import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {NavBar} from './app/NavBar'
import {Home} from './app/Home'

import {DetailPostView} from './features/posts/DetailPostView'

function App() {
  return (
    <div className="text-gray-800 bg-gray-100">
      <Router>
        <NavBar />        

        <main>
          <Switch>
            <Route path="/post/:postId">
              <DetailPostView />
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
