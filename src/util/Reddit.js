// Reddit Utility functions to get data for the viewer app.
import { sampleData } from './sampleResponse'
import { nanoid } from '@reduxjs/toolkit'

// Fetch and return posts from the frontpage
export const fetchRedditPage = async (endpoint) => {
  let data = await fetch(`https://www.reddit.com${endpoint}.json`)
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
      postHint: post.post_hint,
      title: post.title,
      score: post.score,
      author: post.author,
      url: `https://www.reddit.com/${post.permalink}`,
      thumbnail: post.thumbnail,
      image: post.url,
    }

    posts.push(newPostObj);
  }

  return posts;
}

// Return a list of posts from the sample data with only props we care about
export const getSamplePosts = () => {
  return getPosts(sampleData.data);
}