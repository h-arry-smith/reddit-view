import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { selectPostById } from './postSlice';

export const DetailPostView = () => {
  let match = useParams().postId;
  let post = useSelector(state => selectPostById(state, match));

  console.log(post);

  let thumbImg;
  if (post.thumbnail) {
    thumbImg = <img src={post.thumbnail} alt="little people"/>
  }

  return (
    <div>
      {thumbImg}
      <h2>{post.title}</h2>
      <p>{post.author}</p>
    </div>
  );
}