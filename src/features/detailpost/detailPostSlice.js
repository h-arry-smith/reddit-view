import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'idle',
  error: null
};

// TODO: Should be elevated to reddit util really
export const fetchPost = createAsyncThunk('detailpost/fetchPosts', async ({id, url}) => {
  console.log(`${url}.json`)

  let data;
  try {
    data = await fetch(`${url}.json`)
      .then(response => response.json());
  } catch (e) {
    console.log(e)
    return {'id': id, 'post': {}, 'comments': {}};
  }

  return {
    'id': id,
    'post': data[0],
    'comments': data[1]
  }
})

const detailPostsSlice = createSlice({
  name: 'detailpost',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPost.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchPost.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
})

export default detailPostsSlice.reducer;
