import React from 'react'

export const Comment = ({comment}) => {
  return (
    <div className="p-2 my-4 bg-white">
      <div className="flex justify-between text-sm tracking-wide text-gray-500 border-b">
        <p id="author">u/{comment.author}</p>
        <p id="score">{comment.score}</p>
      </div>
      <div className="px-2 mt-2"> 
        <p id="body">{comment.body}</p>
      </div>
    </div>
  )
}