import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRedditPage } from '../../util/Reddit'

const initialState = {
  data: [],
  status: 'idle',
  endpoint: '/r/popular/hot',
  error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (endpoint) => {
  const data = await fetchRedditPage(endpoint);
  return data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setEndpoint(state, action) {
      state.endpoint = action.payload;
      state.status = 'idle';
    }
  },
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

export const {setEndpoint} = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = state => state.posts.data;
export const selectPostById = (state, id) => state.posts.data.find(e => e.id === id)