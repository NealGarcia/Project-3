import React from "react";
import { Link } from "react-router-dom";

function EmployeeCard(props) {

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
