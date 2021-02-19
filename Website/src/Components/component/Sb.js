import React from "react";
import { NavLink } from 'react-router-dom';
import './Sb.css';


const Sb = () => {
    return (
        <container>
            <div>
                <NavLink to="/login" className="login">Login</NavLink>
                <p className="slash">/</p>
                <NavLink to="./sign" className="sign">Sign Up </NavLink>
            </div>


        </container>


    );
}

export default Sb;