import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFrontPage } from '../../util/Reddit'

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const data = await fetchFrontPage();
  return data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
})

export default postsSlice.reducer;
export const selectAllPosts = state => state.posts.data;
export const selectPostById = (state, id) => state.posts.data.find(e => e.id === id)