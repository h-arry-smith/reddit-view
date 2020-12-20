import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { selectAllPosts, fetchPosts} from './postSlice'

import { Post } from './Post'

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector(state => state.posts.status)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch]);

  return (
    <div>
      {posts.map(post => {
        return <Post key={post.id} post={post} />
      })}
    </div>
  );
}