import React from 'react'
import { useDispatch } from 'react-redux'

import {setSubreddit} from '../posts/postSlice'

// Choose 10 interesting subreddits just to build out functionality, future work could be done here
export const SubredditSelector = () => {
  const dispatch = useDispatch();

  const changeSubreddit = (event) => {
    event.preventDefault();
    dispatch(setSubreddit(event.target.value));
  }

  return (
    <div>
      <select 
        name="subreddits" 
        id="subreddits"
        onChange={changeSubreddit}
      >
        <option value="popular">Popular</option>
        <option value="2meirl4meirl">2meirl4meirl</option>
        <option value="disneyvacation">disneyvacation</option>
        <option value="unresolvedmysteries">unresolvedmysteries</option>
        <option value="wewantplates">wewantplates</option>
        <option value="antiMLM">antiMLM</option>
        <option value="talesfromretail">talesfromretail</option>
        <option value="publicfreakout">publicfreakout</option>
        <option value="askreddit">askreddit</option>
        <option value="unethicalLifeProTips">unethicalLifeProTips</option>

      </select>
    </div>
  )
}