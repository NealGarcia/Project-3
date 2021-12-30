import React from "react";
import { useEffect, useState, useContext } from "react";
import EmployeeCard from "./EmployeeCard";

function Results({ employees }) {
  return (
    <div className="component result">
      <section id="card-container">
        {employees.map((employee) => (
          <div className="component card">
            <EmployeeCard employee={employee} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Results;
