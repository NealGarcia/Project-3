import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

function NewEmployee(props) {
   const [newEmployee, setNewEmployee] = useState({});
  // const [name, setName] = useState(undefined);


  async function call(url = "", data = {}) {
    const options = {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      mode: "cors",
    };
    const Employee = await fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setNewEmployee(json)
        console.log("Success:", newEmployee);
      });
    }
  console.log( newEmployee)


  function handleChange(e) {
    setNewEmployee({...newEmployee,[e.target.id]:e.target.value});
    console.log(newEmployee)
  }

  function handleSubmit(e) {
    e.preventDefault();
    call('http://localhost:8000/api/', newEmployee).then((emp) => console.log(emp))
  }
  return (
    <div className="component">
      <div className="formContainer">
        <form className="newEmployeeForm" onSubmit={handleSubmit}>
          <Link to={"/"} id="return">
            <p className="return">Go Back</p>
          </Link>
          <h2>Create a New Profile</h2>
          <h3>Personal Information</h3>
          <div className="form-group">
            <input
              required
              placeholder="Name:"
              className="input-control"
              name="name"
              // value={name}
              id="name"
              onChange={handleChange}
            />
            <input
              required
              placeholder="Age:"
              className="input-control"
              name="age"
              id="age"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              placeholder="Profile Image URL:"
              className="input-control"
              name="image[url]"
              id="url"
            ></input>
          </div>

          <div className="form-group">
            <input
              placeholder="Address"
              className="input-control"
              id="address"
            />
          </div>

          <div className="form-group">
            <input placeholder="City" className="input-control" id="city" />
            <input className="input-control" placeholder="State" id="state" />
            <input className="input-control" placeholder="ZIP" id="zip" />
          </div>

          <h3>Work History</h3>
          <div className="form-group">
            <input
              className="input-control"
              placeholder="Job Title"
              id="title"
            />
            <input
              className="input-control"
              placeholder="Company"
              id="company"
            />
          </div>

          <h3>Contact Info</h3>
          <div className="form-group">
            <input
              className="input-control"
              placeholder="Phone Number"
              id="phone"
            />
            <input
              className="input-control"
              placeholder="Email Address"
              id="email"
            />
          </div>

          <h3>Availability</h3>
          <p>Choose the days you are available:</p>
          <div className="checkboxes">
            <label htmlFor="mon">Mon.</label>
            <input type="checkbox" id="mon" name="mon" />

            <label htmlFor="tues">Tues.</label>
            <input type="checkbox" id="tues" name="tues" />

            <label htmlFor="wed">Wed.</label>
            <input type="checkbox" id="wed" name="wed" />

            <label htmlFor="thu">Thu.</label>
            <input type="checkbox" id="thu" name="thu" />

            <label htmlFor="fri">Fri.</label>
            <input type="checkbox" id="fri" name="fri" />

            <label htmlFor="sat">Sat.</label>
            <input type="checkbox" id="sat" name="sat" />

            <label htmlFor="sun">Sun.</label>
            <input type="checkbox" id="sun" name="sun" />
          </div>
          <div className="checkboxes">
            <button className="createButton">Create</button>
          </div>
        </form>
        <Link to={"/update"}>Already have a profile? Click Here!</Link>
      </div>
    </div>
  );
}

export default NewEmployee;
