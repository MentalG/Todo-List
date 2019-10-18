import React from 'react'

//css
import './search-panel.css'

const SearchPanel = ({ onSearchEnter }) => {
    return (
        <input
            onChange={(e) => onSearchEnter(e.target.value)}
            className='search-input form-control'
            placeholder='search' />
    )
}

export default SearchPanel