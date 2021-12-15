import React from "react";
import {Link } from "react-router-dom";


function Register(){

    return(
<>

<h1>Select the account you would like to register</h1>
<nav className = "nav">
        <Link to="/register/volunteer">Volunteer</Link>
        <Link to="/register/provider">Provider</Link>
      </nav>


</>

    )
}
export default Register