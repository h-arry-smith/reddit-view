import React from 'react'
import { PostList } from '../features/posts/PostList'
import { CategoryList } from '../features/category/CategoryList'

export const Home = () => {
  return (
    <div>
      <CategoryList />
      <PostList />
    </div>
  );
}