import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({post}) => {

  let thumbImg;
  switch (post.thumbnail) {
    case 'self':
      thumbImg = <p className="font-bold tracking-wide text-center text-gray-500 uppercase">self</p>;
      break;
    case 'nsfw':
      thumbImg = <p className="font-bold tracking-wide text-center text-red-700 uppercase">nsfw</p>;
      break;
    case 'default':
      thumbImg = <p></p>
      break;
    default:
      thumbImg = <img src={post.thumbnail} className="object-cover w-full" alt="little people"/>
  }

  return (
    <Link to={`/post/${post.id}`}>
      <div className="flex p-4 m-4 bg-white border rounded-md shadow-sm hover:shadow-md">
        <div className="w-1/6">
          {thumbImg}
        </div>
        <div className="w-4/6 ml-4">
          
          <div className="text-xs tracking-wide text-gray-500 uppercase">
            <span id="subreddit">
              r/{post.subreddit}
            </span>
            <span> | </span>
            <span id="author">
              u/{post.author}
            </span>
          </div>

          <h1 id="title" className="w-full text-xl font-semibold text-gray-900">{post.title}</h1>
        </div>
        <div className="flex items-center justify-center w-1/6">
          <p id="score" className="text-gray-600">{post.score}</p>
        </div>
      </div>
    </Link>
  );
}