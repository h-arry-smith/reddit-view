import React from 'react'
import {Link} from 'react-router-dom'
import { SearchBar } from '../features/search/SearchBar'

export const NavBar = () => {
  return (
    <div className="px-4 bg-white border-b-4 border-yellow-500">
      <div className="flex items-center justify-between w-auto mt-4 text-center">
        <div className="">
          <h1 className="text-3xl font-semibold">RedditView</h1>
        </div>
        <div className="text-lg font-semibold hover:text-yellow-600">
          <Link to="/">Home</Link>
        </div>
      </div>
      <SearchBar />
    </div>
  );
}