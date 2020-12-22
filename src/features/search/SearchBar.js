import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setEndpoint } from '../posts/postSlice'

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const onSearchTextChanged = e => setSearchText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setEndpoint(`/search.json?q=${searchText}`))
    console.log(searchText);
    setSearchText('');
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