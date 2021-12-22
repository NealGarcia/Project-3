import React, { useState } from 'react';

function SearchBar({ handleSubmit, handleChange, search }) {
   const statesArr = ["AL", "AK", "AZ", "AR", "CA", "CZ", "CO", "CT", "DE", "CD", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"]
   const stateList = statesArr.map(state => <option value = {state} />)
    return (
        // <div className='sideBar'>
            <form className = "searchForm sideBar component" onSubmit = {handleSubmit}>
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
                   <input type = "text" list="states" onChange = {handleChange} name="state" />
                     <datalist id="states">
                        {stateList}
                     </datalist>
                 
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
        // </div>
    );
}

export default SearchBar;