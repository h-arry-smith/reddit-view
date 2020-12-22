import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRedditPage } from '../../util/Reddit'

const initialState = {
  data: [],
  status: 'idle',
  subreddit: 'popular',
  endpoint: '/r/popular/hot',
  searchTerm: '',
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
      state.searchTerm = '';
    },
    setSearch(state, action) {
      state.endpoint = `/search.json?q=${action.payload}`;
      state.status = 'idle';
      state.searchTerm = action.payload;
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

export const {setEndpoint, setSearch} = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = state => state.posts.data;
export const selectPostById = (state, id) => state.posts.data.find(e => e.id === id)