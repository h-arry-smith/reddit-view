import React from 'react';

export const Category = ({name, active, onClick}) => {
  if (active) {
  return (
    <div onClick={onClick} className="flex items-center justify-center w-1/3 h-12 bg-white border-b-4 border-red-600">
      <p className="text-lg font-semibold tracking-wide text-red-600">{name}</p>
    </div>
  )
  }
  return (
    <div onClick={onClick} className="flex items-center justify-center w-1/3 h-12 bg-white border-b-4 hover:border-gray-600">
      <p className="text-lg font-semibold tracking-wide text-gray-500 hover:text-gray-900">{name}</p>
    </div>
  );
}