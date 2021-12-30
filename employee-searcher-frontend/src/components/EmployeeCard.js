import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { SearchContext } from "./EmployerHome";

function EmployeeCard(props) {
  // useEffect(()=>{console.log(props.employee)},[null,props.employee])

  return (
    <Link to={`/details/${props.employee._id}`} className="card-link">
      <div className="card-image">
        <img
          src={props.employee.img.url}
          alt={props.employee.img.title}
          width="100%"
          className="image"
        />
      </div>
      <div className="card-title">
        <h3>{props.employee.name}</h3>
      </div>
    </Link>
  );
}

export default EmployeeCard;
