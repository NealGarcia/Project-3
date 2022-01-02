import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <div className="header">
            <h1>Employee Finder</h1>
            <Link to={"/new"}>
                <button> Create a Profile</button>
            </Link>
        </div>
    );
}

export default Header;