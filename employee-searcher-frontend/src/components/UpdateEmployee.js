import React from "react";
import { Link } from "react-router-dom"

function UpdateEmployee(props) {
  return (
    <div className="component">
      <div className="formContainer">
        <form className="newEmployeeForm">
        <Link to={"/new"} id="return">
          <p class="return">Go Back</p>
        </Link>
          <h3>Update Your Profile</h3>
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
            <button component = "hideButton">Hide Profile</button>
        </div>
        <div>
            <button component = "saveButton">Save Changes</button>
            <button component = "deleteButton">Delete Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployee;
