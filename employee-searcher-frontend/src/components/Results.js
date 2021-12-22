import React from "react";
import { useEffect, useState, useContext } from "react";
import EmployeeCard from "./EmployeeCard";
import { SearchContext } from './EmployerHome'

function Results({employees}) {
  const search = useContext(SearchContext)
  // const [employees, setEmployees] = useState([]);


  // function getResults() {
  //   const url = `http://localhost:8000/api/search/?name=&age=&location=&state=&city=&rating=`
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setEmployees(json);
  //     })
  //     .catch(console.error);
  // }
  // useEffect(() => {
  //   getResults()
  // }, []);

  return (
    <div className="component result">
      <section id="card-container">
        {employees.map((employee) => 
            <div className="component card">
              <EmployeeCard
                employee={employee}/>
            </div>
        )}
      </section>

    </div>
  );
}

export default Results;
