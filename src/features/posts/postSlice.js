import { createSlice } from '@reduxjs/toolkit';
import {getSamplePosts} from '../../util/Reddit'

const initialState = getSamplePosts();

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})



export default postsSlice.reducer;