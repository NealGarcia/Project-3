import React from 'react';

function NewEmployee(props) {
    return (
        <div className="component">
            Create New Profile
            <div className = "profileContainer">
                <form className = "newEmployeeForm">
                    <input type = "text" placeholder = "Name"  id = "inputName"/>
                    <input type = "text" placeholder = "Price" id = "inputPrice"/>
                    <input type = "text" placeholder = "Description" id = "inputDescription"/> 
                    <input type = "text" placeholder = "City" id = "cityInput"/>
                    <input type = "text" placeholder = "State" id = "stateInput" />
                    <input type = "text" placeholder = "Email Address" id = "emailInput" />
                    <input type = "text" placeholder = "Phone Number" id = "phoneInput" />
                    <input type = "submit" value = "Create Profile"/>
                </form>
            </div>
        </div>
    );
}

export default NewEmployee;
