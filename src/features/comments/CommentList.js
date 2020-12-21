import React from 'react'
import { Comment } from './Comment'

export const CommentList = ({comments}) => {
  return (
    <div>
      {comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />
      })}
    </div>
  )
}