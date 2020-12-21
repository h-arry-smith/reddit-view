import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { selectPostById } from '../posts/postSlice';
import { fetchPost } from './detailPostSlice'

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

  if (typeof postDetail === 'object') {
    console.log(`${match} | ${postDetail.id}`);
  }

  let thumbImg;
  if (post.thumbnail) {
    thumbImg = <img src={post.thumbnail} alt="little people"/>
  }

  return (
    <div key={post.id}>
      <div>
        {thumbImg}
        <h2>{post.title}</h2>
        <p>{post.author}</p>
        <p></p>
      </div>

      <div>
        {postDetail.image ? <img src={postDetail.image} /> : ''}
      </div>
    </div>
  );
}