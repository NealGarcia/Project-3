import React from "react";
import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";

function Results(props) {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("https://backend-api-employees.herokuapp.com/") //<-- the url as a string
      // Wait for the response and convert it to json
      .then((res) => res.json())
      // Take the json and do something with it
      .then((json) => {
        setEmployees(json);
        // the json parameter holds the json data
        // so here's where you will need to
        // use the setBirds method put the json into state
      })
      // Catch and log any errors to the console
      .catch(console.error);
  }, []);

  return (
    <div className="component">
      Results populate here:
      <br />
      <section  id="card-container">
        {employees.map((employee) => {
          return (
            <div className="component card">
              <EmployeeCard employee={employee}/>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Results;
