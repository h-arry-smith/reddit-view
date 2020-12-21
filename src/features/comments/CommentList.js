import React from 'react'
import { Comment } from './Comment'

export const CommentList = ({comments}) => {
  if (!comments) {
    return <div>No Comments</div>
  }

  return (
    <div className="">
      {comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />
      })}
    </div>
  )
}