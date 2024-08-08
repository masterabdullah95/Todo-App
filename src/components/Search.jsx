import React from 'react'

const Search = ({searchText, setSearchText}) => {
  return (
    <div className='my-3'>
        <input type="text" className='form-control' placeholder='Search ...' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
    </div>
  )
}

export default Search