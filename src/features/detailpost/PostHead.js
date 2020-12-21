import React from 'react'

export const PostHead = ({title, author, score, subreddit}) => {
  return (
    <div className="px-4 py-2 m-2 bg-white rounded-md shadow-md hover:shadow-lg">
      <p className="mt-2 text-xs tracking-wide uppercase text-grey-500">r/{subreddit}</p>
      <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      <div className="flex justify-between mt-4 align-baseline">
        <div className="text-gray-500 ext-sm">
          <span>u/{author}</span>
        </div>
        <div>
          <span className="text-lg font-semibold text-yellow-700">{score}</span>
        </div>
      </div>
    </div>
  );
}