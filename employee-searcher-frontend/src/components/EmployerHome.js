import React, { useState, useEffect } from 'react';
import Results from './Results';
import SearchBar from './SearchBar'

export const SearchContext = React.createContext()

function EmployerHome(props) {
    // Set state for employees and search
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState({
        name: "",
        age: "",
        city: "",
        state: "",
        pay: "",
        rating: "",
    })

    // Search form event listeners
    function handleChange(event) {
        const value = event.target.value
        setSearch({
            ...search,
            [event.target.name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(search)
    }

    // Function to get data from API
      useEffect(() => {
        const url = `http://localhost:8000/api/search/?name=${search.name}&age=${search.age}&location=&state=${search.state}&city=${search.city}&rating=${search.rating}&pay=${search.pay}`
        fetch(url)
          .then((res) => res.json())
          .then((json) => {
            setEmployees(json);
          })
          .catch(console.error);
      }, [search]);
      
    return (
        <div className="component employer-splash">
            Employer lands here
            <div className='employerHome'>
            <SearchBar
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
                search = {search}
            />
            <SearchContext.Provider value={search}>
                <Results employees = {employees}/>
            </SearchContext.Provider>
            </div>
        </div>
    );
}

export default EmployerHome;