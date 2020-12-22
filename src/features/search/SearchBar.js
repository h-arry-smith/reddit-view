import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setEndpoint } from '../posts/postSlice'

export const SearchBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const onSearchTextChanged = e => setSearchText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setEndpoint(`/search.json?q=${searchText}`))
    setSearchText('');
    history.push('/');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          id="search"
          name="search"
          value={searchText}
          onChange={onSearchTextChanged}
        />
      </form>
    </div>
  );
}