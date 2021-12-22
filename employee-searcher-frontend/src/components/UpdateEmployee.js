import React from "react";
import { Link } from "react-router-dom"

function UpdateEmployee(props) {
  return (
    <div className="component">
      <div className="formContainer">
        <form className="newEmployeeForm" onSubmit={handleSubmit}>
        <Link to={"/new"} id="return">
          <p className="return">Go Back</p>
        </Link>
          <h2>Update Your Profile</h2>
          <h3>Personal Information</h3>
          <div className="form-group">
            <input placeholder="Name:" className="input-control" />
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
                <label for="mon">Mon.</label>
                <input type="checkbox" id="mon" name="mon"/>

                <label for="tues">Tues.</label>
                <input type="checkbox" id="tues" name="tues"/>

                <label for="wed">Wed.</label>
                <input type="checkbox" id="wed" name="wed"/>

                <label for="thu">Thu.</label>
                <input type="checkbox" id="thu" name="thu"/>

                <label for="fri">Fri.</label>
                <input type="checkbox" id="fri" name="fri"/>

                <label for="sat">Sat.</label>
                <input type="checkbox" id="sat" name="sat"/>

                <label for="sun">Sun.</label>
                <input type="checkbox" id="sun" name="sun"/>
            </div>
          <div class="checkboxes">
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
