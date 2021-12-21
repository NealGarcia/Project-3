import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { SearchContext } from './EmployerHome'

function EmployeeCard(props) {
    // useEffect(()=>{console.log(props.employee)},[null,props.employee])
  const search = useContext(SearchContext)
  console.log(props.employee)
  console.log(search + " in employee card")

  return (
    <div>
      <Link to ={
          {
            pathname: "/details",
            state: search
          }
      }>
        <div className="card-image">
          <img
            src={props.employee.img.url}
            alt={props.employee.img.title}
            width="100px"
          />
        </div>
        <div className="card-title">
          <h3>{props.employee.name}</h3>
        </div>
      </Link>
    </div>
  );
}

export default EmployeeCard;
