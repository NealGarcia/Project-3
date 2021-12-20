import React from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

function EmployeeCard(props) {
    // useEffect(()=>{console.log(props.employee)},[null,props.employee])
    // console.log(props.employee)
  return (
    <div>
      <Link to = '/details'>
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
