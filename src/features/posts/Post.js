import React from 'react'
import { Link } from 'react-router-dom'
import { MobileImageCard } from './MobileImageCard';
import { PostCard } from './PostCard';

export const Post = ({post}) => {

  let thumbImg;
  switch (post.thumbnail) {
    case 'self':
      thumbImg = <p className="font-bold tracking-wide text-center text-gray-500 uppercase">self</p>;
      break;
    case 'nsfw':
      thumbImg = <p className="font-bold tracking-wide text-center text-red-700 uppercase">nsfw</p>;
      break;
    case 'default':
      thumbImg = <p></p>
      break;
    case '':
      thumbImg = <p></p>
      break;
    default:
      thumbImg = <img src={post.thumbnail} className="object-cover w-full" alt=""/>
  }

  // TODO: Tidying up of post objects, pass as explicit props
  let card = <PostCard image={thumbImg} post={post} />
  if (post.postHint === 'image') {
    card = <MobileImageCard image={post.image} post={post} />
  }

  return (
    <Link to={`/post/${post.id}`}>
      {card}
    </Link>
  );
}