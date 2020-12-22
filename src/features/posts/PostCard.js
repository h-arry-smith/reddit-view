import React from 'react'
import { Score } from './Score'

export const PostCard = ({post, image}) => (
  <div className="flex p-4 m-4 bg-white border rounded-md shadow-sm hover:shadow-md lg:max-h-40">
    <div className="sm:w-1/6">
      {image}
    </div>

  <div class="w-full flex">
    <div className="w-5/6 ml-4">
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

    <Score score={post.score} />
  </div>
  </div>
)