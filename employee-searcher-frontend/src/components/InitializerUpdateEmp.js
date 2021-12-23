import React from 'react';
import UpdateEmployee from './UpdateEmployee';
import { useEffect, useState } from 'react';

function InitializerUpdateEmp(props) {
    const [employee, setEmployee] = useState({});
console.log(props.match.params.user)
    const url = `http://localhost:8000/api/employee/${props.match.params.user}`
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then(json=>{
          setEmployee(json)
        })
        },[])
        console.log(employee)
    return (
        <div>
            {(employee!=={})?<UpdateEmployee user={props.match.params.user} employee={employee} setEmployee={setEmployee}/>:null}
        </div>
    );
}

export default InitializerUpdateEmp;