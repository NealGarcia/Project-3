import React from 'react';

function SearchBar({ handleSubmit, handleChange }) {
    return (
        <div className='component'>
            <form className = "searchForm" onSubmit = {handleSubmit}>
                <input 
                    placeholder='what do you need?'
                    type = "text"
                    onChange = {handleChange}
                 />
                <button type = "submit">search</button>
            </form>
        </div>
    );
}

export default SearchBar;