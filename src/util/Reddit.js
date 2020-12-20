// Reddit Utility functions to get data for the viewer app.
import { sampleData } from './sampleResponse'
import { nanoid } from '@reduxjs/toolkit'

// Return a list of posts from the sample data with only props we care about
export const getSamplePosts = () => {
  const posts = [];
  for (const child in sampleData.data.children) {
    let post = sampleData.data.children[child].data;
    let newPostObj = {
      id: nanoid(),
      subreddit: post.subreddit,
      title: post.title,
      score: post.score,
      author: post.author
    }

    if (post.thumbnail !== 'self') {
      newPostObj.thumbnail = post.thumbnail;
    } else {
      post.thumbnail = null;
    }

    posts.push(newPostObj);
  }

  return posts;
}