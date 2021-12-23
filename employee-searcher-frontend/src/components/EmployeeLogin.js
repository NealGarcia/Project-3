import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UpdateEmployee from "./UpdateEmployee";

function EmployeeLogin(props) {
  const [user, setUser] = useState("");
  function handleChange(e) {
    setUser(e.target.value);
    console.log(user);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //fetch(`http://localhost:8000/api/employee/${user}`).then(user=>console.log(user))
  }
  return (
    <div>
      <h3>Enter your unique ID here!</h3>
      <input placeholder="id here" onChange={handleChange}></input>
      <Link to={`/update/${user}`}>
        <button onSubmit={handleSubmit}>Find my profile!</button>
      </Link>
    </div>
  );
}

export default EmployeeLogin;
