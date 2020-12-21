import React from 'react'

export const Comment = ({comment}) => {
  return (
    <div>
      <p>Author: {comment.author}</p>
      <p>Body: {comment.body}</p>
      <p>Score: {comment.score}</p>
    </div>
  )
}