import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
  return (
    <div className="NavBar">
      <h1 className="NavBar-title">RedditView</h1>
      <Link to="/">Home</Link>
    </div>
  );
}