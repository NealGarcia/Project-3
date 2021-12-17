import { Link } from "react-router-dom"
 
import React from "react";

function NewEmployee(props) {
  return (
    <div className="component">

      <div className="formContainer">
        <form className="newEmployeeForm">
        <Link to={"/"} id="return">
          <p class="return">Go Back</p>
        </Link>
          <h2>Create a New Profile</h2>
          <h3>Personal Information</h3>
          <div class="form-group">
            <input placeholder="Name:" class="input-control" />
            <input placeholder="Age:" class="input-control" />
          </div>

          <div class="form-group">

            <input placeholder="Profile Image URL:" class="input-control"></input>
          </div>

          <div class="form-group">
            <input placeholder="Address" class="input-control" />
          </div>

          <div class="form-group">
            <input placeholder="City" class="input-control" />
            <input class="input-control" placeholder="State" />
            <input class="input-control" placeholder="ZIP" />
          </div>

            <h3>Work History</h3>
            <div class="form-group">
            <input class="input-control" placeholder="Job Title" />
            <input class="input-control" placeholder="Company" />
          </div>

            <h3>Contact Info</h3>
            <div class="form-group">
            <input class="input-control" placeholder="Phone Number" />
            <input class="input-control" placeholder="Email Address" />
          </div>

            <h3>Availability</h3>
            <p>Choose the days you are available:</p>
            <div class = "checkboxes">
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
            <button className = "createButton">Create</button>
          </div>
        </form>
            <Link to = {"/update"}>Already have a profile? Click Here!</Link>
        </div>
    </div>
  );
}

export default NewEmployee;
