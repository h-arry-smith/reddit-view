import React from 'react'
import {useSelector} from 'react-redux'

export const SearchResultDisplay = () => {
  let searchTerm = useSelector(state => state.posts.searchTerm);

  if (searchTerm === '') {
    return (
      <div></div>
    )
  }

  return (
    <div className="mx-4 mt-2 -mb-2 text-2xl font-semibold border-b">
      <p><span className="font-light text-gray-600">Searched for </span> {searchTerm}</p>
    </div>
  )
}