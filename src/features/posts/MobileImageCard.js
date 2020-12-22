import React from 'react'
import { Score } from './Score'

export const MobileImageCard = ({post, image}) => (
  <div className="m-4 overflow-hidden bg-white border rounded-md shadow-sm sm:p-4 sm:flex hover:shadow-md lg:max-h-40">

    <div className="sm:w-1/6 lg:px-4">
      <img src={image} className="h-auto lg:h-full" alt=""/>
    </div>

    <div className="flex w-full pl-4 mb-4">
      <div className="w-5/6">
        <div className="mt-2 text-xs tracking-wide text-gray-500 uppercase">
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

      <Score score={post.score} />
    </div>
  </div>
)