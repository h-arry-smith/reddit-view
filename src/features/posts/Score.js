import React from 'react'

export const Score = ({score}) => (
  <div className="flex items-center justify-end w-1/6 sm:pr-2 md:font-semibold md:text-xl">
    <p id="score" className="text-gray-600">{score}</p>
  </div>
)