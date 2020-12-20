import React from 'react'

import './Post.css';

export const Post = ({post}) => {

  let thumbImg;
  if (post.thumbnail) {
    thumbImg = <img src={post.thumbnail} alt="little people"/>
  }

  return (
    <div className="Post">
      <div className="Post-image">
        {thumbImg}
      </div>
      <div className="Post-cardText">
        <h1 className="Post-title">{post.title}</h1>
        <p className="Post-info">Subreddit: {post.subreddit} | Author: {post.author}</p>
        <p className="Post-score">{post.score}</p>
      </div>
    </div>
  );
}