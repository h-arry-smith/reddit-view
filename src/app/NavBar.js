import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-auto h-20 px-4 text-center bg-white border-b-4 border-yellow-500">
      <div className="">
        <h1 className="text-3xl font-semibold">RedditView</h1>
      </div>
      <div className="text-lg font-semibold hover:text-yellow-600">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}