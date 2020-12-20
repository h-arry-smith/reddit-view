// Reddit Utility functions to get data for the viewer app.
import { sampleData } from './sampleResponse'
import { nanoid } from '@reduxjs/toolkit'

// Fetch and return posts from the frontpage
export const fetchFrontPage = async () => {
  let data = await fetch('https://www.reddit.com/r/popular.json')
    .then(response => response.json())
    .then(response => response.data);

  return getPosts(data);
}

// Return a list of structured objects from json data
export const getPosts = (data) => {
  const posts = [];

  for (const child in data.children) {
    let post = data.children[child].data;
    let newPostObj = {
      id: nanoid(),
      subreddit: post.subreddit,
      title: post.title,
      score: post.score,
      author: post.author,
      url: post.url
    }

    // Include thumbnail if present
    if (post.thumbnail === 'self' || post.thumbnail === 'default' || post.thumbnail === 'nsfw') {
      newPostObj.thumbnail = null;
    } else {
      console.log(post.thumbnail);
      newPostObj.thumbnail = post.thumbnail;
    }

    posts.push(newPostObj);
  }

  return posts;
}

// Return a list of posts from the sample data with only props we care about
export const getSamplePosts = () => {
  return getPosts(sampleData.data);
}