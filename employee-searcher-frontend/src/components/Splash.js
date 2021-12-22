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
        <div id="buttons">
          <Link to={"/search"}>
            <button onClick={handleEmployer}>Employer</button>
          </Link>
          <Link to={"/new"}>
            <button onClick={handleEmployee}>Employee</button>
          </Link>
        </div>
      </div>
    );
  }
  return null;
}

export default Splash;
