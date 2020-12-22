import React from 'react'

export const RedditLink = ({url}) => {
  return (
    <a href={url}>
      <div className="flex items-center justify-center py-1 mx-2 mt-2 -mb-4 text-sm font-semibold text-white uppercase bg-indigo-600 border-2 border-indigo-600 rounded-md shadow-sm hover:shadow-md hover:bg-white hover:text-indigo-600 hover:border-opacity-100">
        <p>
          View this post on reddit.
        </p>
      </div>
    </a>
  )
}