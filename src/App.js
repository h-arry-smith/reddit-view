import React from 'react';
import './App.css';

import {PostList} from './features/posts/PostList'
import {NavBar} from './app/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;
