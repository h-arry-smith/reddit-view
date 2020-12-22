import React from 'react'
import { PostList } from '../features/posts/PostList'
import { DisplayContainer } from './DisplayContainer';

export const Home = () => {
  return (
    <div>
      <DisplayContainer />
      <PostList />
    </div>
  );
}