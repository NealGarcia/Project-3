import React from 'react';
import { useState } from 'react'; 

function SearchBar(props) {
    const [search, setSearch] = useState("")

    function handleChange(event) {
        setSearch(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(search)
    }
    
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