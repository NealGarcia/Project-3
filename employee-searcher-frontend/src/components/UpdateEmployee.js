import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function UpdateEmployee(props) {
  const [updateEmployee, setUpdateEmployee] = useState(props.employee)
const url = `http://localhost:8000/api/employee/${props.user}`
console.log(props.user)

 async function call(url = ``, data = {}) {
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
      })
      .then(console.log("Success:", updateEmployee));
    
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    console.log(url)
    call(url, updateEmployee).then(console.log(updateEmployee));
  }
  function handleChangeGeneral(e) {
    setUpdateEmployee({ ...updateEmployee, [e.target.id]: e.target.value });
    console.log(e.target.id)
  }
  function handleChangeImg(e) {
    setUpdateEmployee({img:{ ...updateEmployee.img, [e.target.id]: e.target.value }});
    console.log("key:", e.target.id)
    console.log("value:", e.target.value)
    console.log("object:", updateEmployee.img)

  }
  function handleChangeOther(e) {
    setUpdateEmployee({ ...updateEmployee.x, [e.target.id]: e.target.value });
    console.log(e.target.id)
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
            <input id="name" value={updateEmployee.name} placeholder="Name:" className="input-control" onChange={handleChangeGeneral}/>
            <input onChange={handleChangeGeneral} id="age" placeholder="Age:" className="input-control" />
          </div>

          <div className="form-group">

            <input id="url" placeholder="Profile Image URL:" className="input-control"onChange={handleChangeImg}></input>
          </div>

          <div className="form-group">
            <input id="address" placeholder="Address" className="input-control" onChange={handleChangeOther}/>
          </div>

          <div className="form-group">
            <input onChange={handleChangeOther} id="city" placeholder="City" className="input-control" />
            <input onChange={handleChangeOther} id="state" className="input-control" placeholder="State" />
            <input onChange={handleChangeOther} id="zip" className="input-control" placeholder="ZIP" />
          </div>

            <h3>Work History</h3>
            <div className="form-group">
            <input onChange={handleChangeOther} id="title" className="input-control" placeholder="Job Title" />
            <input onChange={handleChangeOther} id="company" className="input-control" placeholder="Company" />
          </div>

            <h3>Contact Info</h3>
            <div className="form-group">
            <input onChange={handleChangeOther} id="phone" className="input-control" placeholder="Phone Number" />
            <input onChange={handleChangeOther} id="email" className="input-control" placeholder="Email Address" />
          </div>

            <h3>Availability</h3>
            <p>Choose the days you are available:</p>
            <div className = "checkboxes">
                <label htmlFor="mon">Mon.</label>
                <input onChange={handleChangeOther} type="checkbox" id="mon" name="mon"/>

                <label htmlFor="tues">Tues.</label>
                <input onChange={handleChangeOther} type="checkbox" id="tue" name="tues"/>

                <label htmlFor="wed">Wed.</label>
                <input onChange={handleChangeOther} type="checkbox" id="wed" name="wed"/>

                <label htmlFor="thu">Thu.</label>
                <input onChange={handleChangeOther} type="checkbox" id="thu" name="thu"/>

                <label htmlFor="fri">Fri.</label>
                <input onChange={handleChangeOther} type="checkbox" id="fri" name="fri"/>

                <label htmlFor="sat">Sat.</label>
                <input onChange={handleChangeOther} type="checkbox" id="sat" name="sat"/>

                <label htmlFor="sun">Sun.</label>
                <input onChange={handleChangeOther} type="checkbox" id="sun" name="sun"/>
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
