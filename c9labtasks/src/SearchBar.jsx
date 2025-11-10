import React from 'react'

const SearchBar = ({search,setSearch}) => {
  return (
    
    <input type="text" name="search" placeholder='Search by name...' value={search} onChange={(e)=>{
        setSearch(e.target.value);
    }}  className="border border-gray-400 p-2 rounded w-1/3" />
  )
}

export default SearchBar