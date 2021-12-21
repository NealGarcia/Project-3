import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'


function Details(props) {
    const [data, setData] = useState([]);
    const location = useLocation()
    const url = ``;
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          setData(response.data);
        })
        .catch(console.err);
    }, []);

    console.log("in details component: " + location.state)

    return (
        <div>

            Details component


        </div>
    );
}

export default Details;