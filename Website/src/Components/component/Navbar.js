import React from "react";
import "./Navbar.css";
import Home from '@material-ui/icons/Home';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.png';

const Navbar = () => {

    return (
        <container >
            <div className="Navbar">
                <NavLink to="/" className="a"><Home /></NavLink>
                <NavLink to="./department" className="a">Department </NavLink>
                <NavLink to="./Event" className="a">Event </NavLink>
                <NavLink to="/admission" className="a">Admission</NavLink>
                <NavLink to="/TP" className="a">T&P</NavLink>
                <NavLink to="Library" className="a">Library</NavLink>
                <NavLink to="/Notification" className="a">Notification</NavLink>
                <NavLink to="/Campus" className="a">Campus</NavLink>
            </div>
            <div className="whiteLogo">
                <img src={Logo} alt="" width="50em" height="50em" srcset="" />
            </div>

        </container>


    );
}

export default Navbar;