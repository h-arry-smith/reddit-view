import React from 'react'

export const Post = ({post}) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>Subreddit: {post.subreddit} | Author: {post.author}</p>
      <p>{post.score}</p>
    </div>
  );
}