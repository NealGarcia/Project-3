import { Link } from "react-router-dom"
 
import React from "react";

function NewEmployee(props) {
  return (
    <div className="component">

      <div className="formContainer">
        <form className="newEmployeeForm">
          <h3>Create a New Profile</h3>
          <div class="form-group">
            <input placeholder="Name" class="input-control" />
            <input placeholder="Age" class="input-control" />
          </div>

          <div class="form-group">
            <textarea
              rows="6"
              class="input-control"
              placeholder="Description"
            ></textarea>
          </div>

          <div class="form-group">
            <input placeholder="Address" class="input-control" />
          </div>

          <div class="form-group">
            <input placeholder="City" class="input-control" />
            <input class="input-control" placeholder="State" />
            <input class="input-control" placeholder="ZIP" />
          </div>

          <div class="form-group">
            <button className = "createButton">Create</button>
          </div>
        </form>
            <Link to = {"/update"}>Already have a profile? Click Here!</Link>
        </div>
    </div>
  );
}

export default NewEmployee;
