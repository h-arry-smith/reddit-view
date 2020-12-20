import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { selectAllPosts, fetchPosts} from './postSlice'

import { Post } from './Post'
import { PostPlaceholder } from './PostPlaceholder'

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector(state => state.posts.status)
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch]);

  let content = <div></div>;

  if (postStatus === 'loading') {
    content = (
      <div>
        {[1,1,1,1,1].map(() =>{ return <PostPlaceholder />})}
      </div>
    )
  }

  if (postStatus === 'succeeded') {
    content = (
      <div>
        {posts.map(post => {
          return <Post key={post.id} post={post} />
        })}
      </div>
    )
  }

  if (postStatus === 'failed') {
    content = (
      <div>
        <h1>Error!</h1>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div>
      {content}
    </div>
  );
}