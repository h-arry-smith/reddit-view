import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEndpoint } from '../posts/postSlice'

import { Category } from './Category';

export const CategoryList = () => {
  const dispatch = useDispatch();
  const current = useSelector(state => state.posts.endpoint);
  
  const setEndpointOnClick = (endpoint) => {
    dispatch(setEndpoint(endpoint))
  }

  return (
    <div className="flex items-center justify-center" >
      <Category 
        name='hot' 
        active={current === '/r/popular/hot' ? true : false} 
        onClick={() => setEndpointOnClick('/r/popular/hot')} 
      />
      <Category 
        name='top' 
        active={current === '/r/popular/top' ? true : false} 
        onClick={() => setEndpointOnClick('/r/popular/top')} 
      />
      <Category 
        name='new' 
        active={current === '/r/popular/new' ? true : false} 
        onClick={() => setEndpointOnClick('/r/popular/new')} 
      />
    </div>
  );
}