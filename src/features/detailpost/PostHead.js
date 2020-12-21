import React from 'react'

export const PostHead = ({title, author, score, subreddit}) => {
  return (
    <div>
      <p>r/{subreddit}</p>
      <h1>{title}</h1>
      <div>
        <p><span>u/{author}</span> | {score}</p>
      </div>
    </div>
  );
}