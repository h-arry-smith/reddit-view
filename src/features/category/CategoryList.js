import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEndpoint } from '../posts/postSlice'

import { Category } from './Category';

export const CategoryList = () => {
  const dispatch = useDispatch();
  const current = useSelector(state => state.posts.endpoint);
  const subreddit = useSelector(state => state.posts.subreddit);
  
  const setEndpointOnClick = (endpoint) => {
    dispatch(setEndpoint(endpoint))
  }

  return (
    <div className="flex items-center justify-center border-t" >
      <Category 
        name='hot' 
        active={current === `/r/${subreddit}/hot` ? true : false} 
        onClick={() => setEndpointOnClick(`/r/${subreddit}/hot`)} 
      />
      <Category 
        name='top' 
        active={current === `/r/${subreddit}/top` ? true : false} 
        onClick={() => setEndpointOnClick(`/r/${subreddit}/top`)} 
      />
      <Category 
        name='new' 
        active={current === `/r/${subreddit}/new` ? true : false} 
        onClick={() => setEndpointOnClick(`/r/${subreddit}/new`)} 
      />
    </div>
  );
}