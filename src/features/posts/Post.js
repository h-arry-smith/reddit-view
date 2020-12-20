import React from 'react'

export const Post = ({post}) => {

  let thumbImg;
  if (post.thumbnail) {
    thumbImg = <img src={post.thumbnail} alt="little people"/>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Subreddit: {post.subreddit} | Author: {post.author}</p>
      <p>{post.score}</p>
      {thumbImg}
    </div>
  );
}