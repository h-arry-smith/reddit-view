import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setSearch } from '../posts/postSlice'

export const SearchBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const onSearchTextChanged = e => setSearchText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(searchText))
    setSearchText('');
    history.push('/');
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="flex items-center my-2">
        <label htmlFor="search" className="text-sm tracking-wide text-gray-400 uppercase">
          search
        </label>
        <input 
          className="w-full px-2 py-px ml-2 border rounded-md appearance-none"
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