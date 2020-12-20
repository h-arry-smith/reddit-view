import React from 'react';
import './App.css';

import {getSamplePosts} from './util/Reddit'

function App() {
  console.log(getSamplePosts());
  return (
    <div className="App">
      <h1>Reddit App</h1>
    </div>
  );
}

export default App;
