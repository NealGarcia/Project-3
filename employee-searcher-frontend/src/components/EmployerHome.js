import React, { useState } from 'react';
import Results from './Results';
import SearchBar from './SearchBar'

export const SearchContext = React.createContext()

function EmployerHome(props) {
    const [search, setSearch] = useState("")

    // Search form event listeners
    function handleChange(event) {
        setSearch(event.target.value)
    }
  
    function handleSubmit(event) {
        event.preventDefault();
        console.log(search)
    }

    return (
        <div className="component">
            Employer lands here
            <SearchBar
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
                search = {search}
            />
            <SearchContext.Provider value={search}>
                <Results />
            </SearchContext.Provider>
        </div>
    );
}

export default EmployerHome;