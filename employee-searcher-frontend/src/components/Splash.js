import { React } from "react";
import { useState } from "react";
import { Link,  } from "react-router-dom";

function Splash(props) {
  const [employeeShow, setEmployeeShow] = useState(false);
  function handleEmployee() {
    setEmployeeShow(!employeeShow);
  }

  const [employerShow, setEmployerShow] = useState(false);
  function handleEmployer() {
    setEmployerShow(!employerShow);
  }

  if (employeeShow === false && employerShow === false ) {
    return (
      <div className="component" id="splash">
        <h1>Welcome to <span>Employee Finder!</span></h1>
        <h2>Short handed at work? Or are you looking for short-term employment?</h2>
        <div id="buttons">
          <Link to={"/search"}>
            <button onClick={handleEmployer}>Employer <br/> <span>Need a worker?</span></button>
          </Link>
          <Link to={"/new"}>
            <button onClick={handleEmployee}>Employee <br/> <span>Need work?</span></button>
          </Link>
        </div>
      </div>
    );
  }
  return null;
}

export default Splash;
