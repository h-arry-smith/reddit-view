import React from 'react'
import {Link} from 'react-router-dom'
import { SearchBar } from '../features/search/SearchBar'
import { SubredditSelector } from '../features/subreddit/SubredditSelector'

export const NavBar = () => {
  return (
    <div className="px-4 bg-white border-b-4 border-yellow-500">
      <div className="flex items-center justify-between w-full mt-4 text-center sm:justify-start">
        <div className="">
          <h1 className="text-3xl font-semibold">RedditView</h1>
        </div>
        <div className="mt-1 ml-4">
          <SubredditSelector />
        </div>
        <div className="w-full text-lg font-semibold text-right hover:text-yellow-600 sm:justify-self-end">
          <Link to="/">
            Home
          </Link>
        </div>
      </div>
      <SearchBar />
    </div>
  )
}