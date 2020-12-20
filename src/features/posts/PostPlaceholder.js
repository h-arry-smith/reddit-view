import React from 'react'

export const PostPlaceholder = () => {
  return (
    <div className="flex p-4 m-4 bg-gray-200 border rounded-md shadow-sm hover:shadow-md">
      <div className="w-1/6 bg-gray-300">
      </div>
      <div className="w-4/6 ml-4">
        <p className="text-xs tracking-wide text-gray-400 uppercase">Loading...</p>
        <h1 className="w-full text-xl font-semibold text-gray-400">Loading...</h1>
      </div>
      <div className="flex items-center justify-center w-1/6">
        <p className="text-sm text-gray-600 uppercase">Loading...</p>
      </div>
  </div>
  );
}