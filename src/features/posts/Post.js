import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({post}) => {

  let thumbImg;
  if (post.thumbnail) {
    thumbImg = <img src={post.thumbnail} className="object-cover w-full" alt="little people"/>
  }

  return (
    <Link to={`/post/${post.id}`}>
      <div className="flex p-4 m-4 bg-white border rounded-md shadow-sm hover:shadow-md">
        <div className="w-1/6">
          {thumbImg}
        </div>
        <div className="w-4/6 ml-4">
          <p className="text-xs tracking-wide text-gray-500 uppercase">r/{post.subreddit} | u/{post.author}</p>
          <h1 className="w-full text-xl font-semibold text-gray-900">{post.title}</h1>
        </div>
        <div className="flex items-center justify-center w-1/6">
          <p className="text-gray-600">{post.score}</p>
        </div>
      </div>
    </Link>
  );
}