import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Modal from 'react-modal' // npm install react-modal to use

function NewEmployee(props) {
    const statesArr = ["AL", "AK", "AZ", "AR", "CA", "CZ", "CO", "CT", "DE", "CD", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"]
    const stateList = statesArr.map(state => <option value = {state} />)

  const [newEmployee, setNewEmployee] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  // Modal
  function openModal() {
    if (Object.keys(newEmployee).length !== 0) // If newEmployee object is not empty
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function call(url, data = {}) {
    const options = {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      mode: "cors",
    };
    const Employee = await fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setNewEmployee(json);
        console.log("Success:", newEmployee);
      });
  }
  console.log(newEmployee);

  // Event Listeners for form
  function handleChange(e) {
    setNewEmployee({ ...newEmployee, [e.target.id]: e.target.value });
    console.log(newEmployee);
  }

  function handleChangeImg(e) {
    setNewEmployee({...newEmployee, img:{ ...newEmployee.img, [e.target.id]: e.target.value }});
    console.log(newEmployee)
  }

  function handleChangeLocation(e) {
    setNewEmployee({...newEmployee, location:{ ...newEmployee.location, [e.target.id]: e.target.value }});
    console.log(newEmployee)
  }

  function handleChangeWorkHistory(e) {
    setNewEmployee({...newEmployee, workHistory:{ ...newEmployee.workHistory, [e.target.id]: e.target.value }});
    console.log(newEmployee)
  }
  
  function handleChangeContact(e) {
    setNewEmployee({...newEmployee, contact:{ ...newEmployee.contact, [e.target.id]: e.target.value }});
    console.log(newEmployee)
  }

  function handleChangeAvailability(e) {
    setNewEmployee({
      ...newEmployee,
      availability: { ...newEmployee.availability, [e.target.id]: e.target.checked },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    call("http://localhost:8000/api/", newEmployee).then((emp) =>
      console.log(emp)
    );
  }
  
  return (
    <div className="component" id="formPage">
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
          <input id="url" placeholder="Profile Image URL:" className="input-control"onChange={handleChangeImg}></input>
          </div>

          <div className="form-group">
            <input
              placeholder="City"
              className="input-control"
              id="city"
              onChange={handleChangeLocation}
            />
            <input
              className="input-control"
              placeholder="State"
              list="states"
              id="state"
              onChange={handleChangeLocation}
            />
             <datalist id="states">
                  {stateList}
            </datalist>
          </div>

          <h3>Work History</h3>
          <div className="form-group">
            <input
              className="input-control"
              placeholder="Job Title"
              id="title"
              onChange={handleChangeWorkHistory}
            />
            <input
              className="input-control"
              placeholder="Company"
              id="company"
              onChange={handleChangeWorkHistory}
            />
          </div>

          <h3>Contact Info</h3>
          <div className="form-group">
            <input
              className="input-control"
              placeholder="Phone Number"
              id="phone"
              onChange={handleChangeContact}
            />
            <input
              className="input-control"
              placeholder="Email Address"
              id="email"
              onChange={handleChangeContact}
            />
          </div>

          <h3>Availability</h3>
          <p>Choose the days you are available:</p>
          <div className="checkboxes">
            <input
              type="checkbox"
              id="mon"
              name="mon"
              onChange={handleChangeAvailability}
            />
            <label htmlFor="mon">Mon.</label>

            <input
              type="checkbox"
              id="tues"
              name="tues"
              onChange={handleChangeAvailability}
            />
            <label htmlFor="tues">Tues.</label>

            <input
              type="checkbox"
              id="wed"
              name="wed"
              onChange={handleChangeAvailability}
            />
            <label htmlFor="wed">Wed.</label>

            <input
              type="checkbox"
              id="thu"
              name="thu"
              onChange={handleChangeAvailability}
            />
            <label htmlFor="thu">Thu.</label>

            <input
              type="checkbox"
              id="fri"
              name="fri"
              onChange={handleChangeAvailability}
            />
            <label htmlFor="fri">Fri.</label>

            <input
              type="checkbox"
              id="sat"
              name="sat"
              onChange={handleChangeAvailability}
            />
            <label htmlFor="sat">Sat.</label>
            

            <input
              type="checkbox"
              id="sun"
              name="sun"
              onChange={handleChangeAvailability}
            />
            <label htmlFor="sun">Sun.</label>
          </div>
          <div className="checkboxes">
            <button className="createButton" onClick = {openModal}>Create</button>
          </div>
        </form>
        <Link to={"/update"}>Already have a profile? Click Here!</Link>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <h3>Profile Created</h3>
        <div>Your unique profile ID is: {newEmployee._id}</div>
        <Link to = "/search"><button onClick={closeModal}>close</button></Link>
        <Link to = {{pathname: `/update/${newEmployee.id}`}} ><button onClick={closeModal}>update your profile</button></Link>
      </Modal>


    </div>
  );
}

export default NewEmployee;
