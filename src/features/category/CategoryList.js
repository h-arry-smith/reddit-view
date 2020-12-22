import React from 'react';
import { useDispatch } from 'react-redux';
import { setEndpoint } from '../posts/postSlice'

import { Category } from './Category';

export const CategoryList = () => {
  const dispatch = useDispatch();
  
  const setEndpointOnClick = (endpoint) => {
    dispatch(setEndpoint({endpoint: endpoint}))
  }

  return (
    <div>
      <Category 
        name='popular' 
        active={false} 
        onClick={() => setEndpointOnClick('/r/popular')} 
      />
      <Category 
        name='top' 
        active={false} 
        onClick={() => setEndpointOnClick('/r/popular/top')} 
      />
      <Category 
        name='new' 
        active={false} 
        onClick={() => setEndpointOnClick('/r/popular/new')} 
      />
    </div>
  );
}