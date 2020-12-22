import React from 'react'
import { PostList } from '../features/posts/PostList'
import { CategoryList } from '../features/category/CategoryList'
import { SearchResultDisplay } from '../features/search/SearchResultDisplay';

export const Home = () => {
  return (
    <div>
      <CategoryList />
      <SearchResultDisplay />
      <PostList />
    </div>
  );
}