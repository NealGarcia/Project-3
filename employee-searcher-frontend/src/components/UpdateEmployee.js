import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function UpdateEmployee(props) {
  const [updateEmployee, setUpdateEmployee] = useState({});
console.log(props.match.params.user)
/*   useEffect(
  fetch(`http://localhost:8000/api/employee/${props.match.params.user}`)
) */

  async function call(url = "", data = {}) {
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      mode: "cors",
    };
    const Employee = await fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setUpdateEmployee(json);
        console.log("Success:", updateEmployee);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();
    call(`http://localhost:8000/api/employee/${props.match.params.user}`, updateEmployee).then((emp) =>
      console.log(emp)
    );
  }
  function handleChange(e) {
    setUpdateEmployee({ ...updateEmployee, [e.target.id]: e.target.value });
    console.log(updateEmployee);
  }
  return (
    <div className="component">
      <div className="formContainer">
        <form className="updateEmployeeForm" onSubmit={handleSubmit}>
        <Link to={`/update/${updateEmployee._id}`} id="return">
          <p className="return">Go Back</p>
        </Link>
          <h2>Update Your Profile</h2>
          <h3>Personal Information</h3>
          <div className="form-group">
            <input value={updateEmployee.name} placeholder="Name:" className="input-control" onChange={handleChange}/>
            <input placeholder="Age:" className="input-control" />
          </div>

          <div className="form-group">

            <input placeholder="Profile Image URL:" className="input-control"></input>
          </div>

          <div className="form-group">
            <input placeholder="Address" className="input-control" />
          </div>

          <div className="form-group">
            <input placeholder="City" className="input-control" />
            <input className="input-control" placeholder="State" />
            <input className="input-control" placeholder="ZIP" />
          </div>

            <h3>Work History</h3>
            <div className="form-group">
            <input className="input-control" placeholder="Job Title" />
            <input className="input-control" placeholder="Company" />
          </div>

            <h3>Contact Info</h3>
            <div className="form-group">
            <input className="input-control" placeholder="Phone Number" />
            <input className="input-control" placeholder="Email Address" />
          </div>

            <h3>Availability</h3>
            <p>Choose the days you are available:</p>
            <div className = "checkboxes">
                <label htmlFor="mon">Mon.</label>
                <input type="checkbox" id="mon" name="mon"/>

                <label htmlFor="tues">Tues.</label>
                <input type="checkbox" id="tues" name="tues"/>

                <label htmlFor="wed">Wed.</label>
                <input type="checkbox" id="wed" name="wed"/>

                <label htmlFor="thu">Thu.</label>
                <input type="checkbox" id="thu" name="thu"/>

                <label htmlFor="fri">Fri.</label>
                <input type="checkbox" id="fri" name="fri"/>

                <label htmlFor="sat">Sat.</label>
                <input type="checkbox" id="sat" name="sat"/>

                <label htmlFor="sun">Sun.</label>
                <input type="checkbox" id="sun" name="sun"/>
            </div>
          <div className="checkboxes">
            <button className = "hideButton">Hide Profile</button>
            <button className = "updateButton">Update</button>
            <button className = "deleteButton">Delete Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployee;
