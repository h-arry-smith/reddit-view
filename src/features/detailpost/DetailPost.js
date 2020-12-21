import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { CommentList } from '../comments/CommentList';
import { selectPostById } from '../posts/postSlice';
import { fetchPost } from './detailPostSlice'
import { PostHead } from './PostHead';

export const DetailPost = () => {
  let dispatch = useDispatch();
  let postStatus = useSelector(state => state.detailpost.status)

  let match = useParams().postId;
  let post = useSelector(state => selectPostById(state, match));

  let postDetail = useSelector(state => state.detailpost.data);

  useEffect(() => {
    if (postStatus === 'idle'  || match !== postDetail.id) {
      dispatch(fetchPost({id: match, url: post.url}))
    }
  }, [dispatch, postStatus, post.url, post.id, match, postDetail.id]);

  if (postStatus === 'loading' || postStatus === 'idle') {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div key={post.id}>
      <PostHead 
        title={postDetail.post.title} 
        author={post.author} 
        score={postDetail.post.score} 
        subreddit={postDetail.post.subreddit}
      />

      <div>
        {postDetail.image ? <img src={postDetail.image} /> : ''}
      </div>

      <div>
        <CommentList comments={postDetail.comments}/>
      </div>
    </div>
  );
}