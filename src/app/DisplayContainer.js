import React from 'react'
import { useSelector } from 'react-redux'
import { CategoryList } from '../features/category/CategoryList'
import { SearchResultDisplay } from '../features/search/SearchResultDisplay'
import { SubredditDisplay } from '../features/subreddit/SubredditDisplay'

export const DisplayContainer = () => {
  let searchTerm = useSelector(state => state.posts.searchTerm)

  if (searchTerm === '' ) {
    return (
      <div className="bg-white">
        <SubredditDisplay />
        <CategoryList />
      </div>
    )
  }

  return (
    <div>
      <SearchResultDisplay />
    </div>
  )
}