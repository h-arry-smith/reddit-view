import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postSlice'
import detailPostReducer from '../features/detailpost/detailPostSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    detailpost: detailPostReducer,
  },
});
