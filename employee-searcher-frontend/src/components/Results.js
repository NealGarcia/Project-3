import React from "react";
import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";

function Results(props) {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/") //<-- the url as a string
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
        <div className="component">
          <img
            src="https://www.zynga.com/storage/2020/02/tracey-thomas-bio.jpg"
            alt="woman"
            width="100px"
          ></img>
          <div>employee info here </div>
        </div>
        {employees.map((employee) => {
          return (
            <div className="component">
              <div className="card-image">
                <img src={employee.img.url} alt={employee.img.title} width='100px' />
              </div>
              <div className="card-title">
                <h3>{employee.name}</h3>
              </div>
            </div>
          );
        })}
      </section>
      <EmployeeCard />
    </div>
  );
}

export default Results;
