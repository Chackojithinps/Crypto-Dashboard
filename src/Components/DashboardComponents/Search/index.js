import React from 'react'
import './styles.css'
import SearchIcon from '@mui/icons-material/Search';
const Search = ({handleChange}) => {
  return (
    <div className='search-Container'>
      <div className='SearchInp'>
       <SearchIcon className='searchIcon'/>
       <input type='text' placeholder='Search' className="searchInput" onChange={handleChange}/>
     </div>
    </div>
    
  )
}

export default Search