import React from "react";
import { NavLink } from 'react-router-dom';
import './Sb.css';


const Sb = () => {
    return (
        <container>
            <div>
                <NavLink to="/login" className="login">Login</NavLink>

            </div>


        </container>


    );
}

export default Sb;