import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { selectAllPosts, fetchPosts} from './postSlice'

import { Post } from './Post'
import { PostPlaceholder } from './PostPlaceholder'

export const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector(state => state.posts.status)
  const endpoint = useSelector(state => state.posts.endpoint)
  const error = useSelector(state => state.posts.error)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts(endpoint))
    }
  }, [postStatus, dispatch, endpoint]);

  let content = <div></div>;

  if (postStatus === 'loading') {
    content = (
      <div>
        {[1,2,3,4,5].map((e) =>{ return <PostPlaceholder key={e}/>})}
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