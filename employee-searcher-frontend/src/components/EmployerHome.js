import React from 'react';
import Results from './Results';
import SearchBar from './SearchBar'

function EmployerHome(props) {
    return (
        <div className="component">
            Employer lands here
            <SearchBar />
            <Results />
        </div>
    );
}

export default EmployerHome;