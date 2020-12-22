import React from 'react'

export const MobileImageCard = ({post, image}) => (
  <div className="m-4 overflow-hidden bg-white border rounded-md shadow-sm sm:p-4 sm:flex hover:shadow-md">
    <div className="sm:w-1/6">
      <img src={image} alt=""/>
    </div>

    <div className="w-4/6 ml-4">
      <div className="mt-2 text-xs tracking-wide text-gray-500 uppercase">
        <span id="subreddit">
          r/{post.subreddit}
        </span>
        <span> | </span>
        <span id="author">
          u/{post.author}
        </span>
      </div>
    </div>

    <div className="flex px-4 mb-4">
      <div className="w-5/6">
        <h1 id="title" className="w-full text-xl font-semibold text-gray-900">{post.title}</h1>
      </div>
      <div className="flex items-center justify-center w-1/6">
        <p id="score" className="text-gray-600">{post.score}</p>
      </div>
    </div>
  </div>
)