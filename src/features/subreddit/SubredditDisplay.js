import React from 'react'
import {useSelector} from 'react-redux'

export const SubredditDisplay = () => {
  let subreddit = useSelector(state => state.posts.subreddit);

  return (
    <div className="py-2 mx-4 text-2xl font-semibold">
      <p><span className="font-light text-gray-600">r/</span>{subreddit}</p>
    </div>
  )
}