import React from 'react';
import UpdateEmployee from './UpdateEmployee';
import { useEffect, useState } from 'react';

function InitializerUpdateEmp(props) {
    const [employee, setEmployee] = useState({});
    const [availability, setAvailability] = useState({})
console.log(props.match.params.user)
    const url = `${process.env.REACT_APP_API_URL}employee/${props.match.params.user}`
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then(json=>{
          setEmployee(json)
          setAvailability(json.availability)
        })
        },[])
        console.log("employee in initializer:", employee, availability)
    return (
        <div>
            {(employee!=={})?<UpdateEmployee user={props.match.params.user} employee={employee} availability={availability} setEmployee={setEmployee}/>:null}
        </div>
    );
}

export default InitializerUpdateEmp;