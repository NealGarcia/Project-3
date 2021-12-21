import React, { useState } from 'react';

function SearchBar({ handleSubmit, handleChange, search }) {
    return (
        <div className='sideBar'>
            <form className = "searchForm" onSubmit = {handleSubmit}>
                <p>Search</p>
                <input 
                    placeholder='Name'
                    type = "text"
                    onChange = {handleChange}
                    id = "nameField"
                    name = "name"
                    value = {search.name}
                 />
                 <input 
                    placeholder='Age'
                    type = "text"
                    onChange = {handleChange}
                    id = "ageField"
                    name = "age"
                    value = {search.age}
                 />
                 <input 
                    placeholder='City'
                    type = "text"
                    onChange = {handleChange}
                    id = "cityField"
                    name = "city"
                    value = {search.city}
                 />
                 <input 
                    placeholder='State'
                    type = "text"
                    onChange = {handleChange}
                    id = "stateField"
                    name = "state"
                    value = {search.state}
                 />
                 <input 
                    placeholder='Pay'
                    type = "text"
                    onChange = {handleChange}
                    id = "payField"
                    name = "pay"
                    value = {search.pay}
                 />
                 <input 
                    placeholder='Rating'
                    type = "text"
                    onChange = {handleChange}
                    id = "ratingField"
                    name = "rating"
                    value = {search.rating}
                 />
                <button type = "submit">search</button>
            </form>
        </div>
    );
}

export default SearchBar;