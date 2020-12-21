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

  let postContent = data[0].data.children[0].data;
  let commentContent = data[1].data;

  let postObj = {
    id: id,
    post : {
      subreddit: postContent.subreddit,
      title: postContent.title,
      score: postContent.score,
      mediaOnly: postContent.media_only,
      isSelf: postContent.is_self,
      selfText: postContent.selftext,
      postHint: postContent.post_hint,
    },
    comments: {}
  }

  // Check for images, if not use thumb
  if (postContent.preview.images[0].source) {
    postObj.image = postContent.preview.images[0].source.url
  }

  return postObj;
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
