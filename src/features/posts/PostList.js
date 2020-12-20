import React from 'react'
import { useSelector } from 'react-redux'

import { Post } from './Post'

export const PostList = () => {
  const posts = useSelector(state => state.posts)

  return (
    <div>
      {posts.map(post => {
        return <Post key={post.id} post={post} />
      })}
    </div>
  );
}