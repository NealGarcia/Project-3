import React from 'react';

function SearchBar(props) {
    return (
        <div className='component'>
            <input placeholder='what do you need?'></input>
            <button>search</button>
        </div>
    );
}

export default SearchBar;