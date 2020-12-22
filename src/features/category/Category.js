import React from 'react';

export const Category = ({name, active, onClick}) => {
  return (
    <div onClick={onClick}>
      <p>{name}</p>
      <p>{active ? 'current' : ''}</p>
    </div>
  );
}