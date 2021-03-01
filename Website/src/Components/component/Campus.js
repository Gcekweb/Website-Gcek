import React from "react";
import './Campus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import SchoolIcon from '@material-ui/icons/School';

import c1 from './images/Capture.PNG';
import hostel_image from './images/hostel.jpg';
const map_image = "https://techbeacon.com/sites/default/files/styles/social/public/field/image/google-location-privacy.jpg?itok=g3oTUeP2";


function Campus() {
    return (
        <container >
            <div className="header-camp">

            </div>
            <div className="camp">
                <div className="campus">
                    <SchoolIcon className="icon" style={{ fontSize: 60 }} />
                   Campus
            </div>
                <div className="official_card">
                    <a href={'http://www.gcekarad.ac.in/'}>
                        <img src={c1} alt="Check your network." className="official_img" /></a>
                    <NavLink to='http://www.gcekarad.ac.in/' className="website"> Official Website </NavLink>
                    <p className="tag1">The official website of GCE Karad</p>
                </div>
                <div >
                    <div className="map_card">
                        <a href={'https://g.page/GCoEK?share'} >
                            <img src={map_image} alt="Check your network." className="map_img" /></a>
                    </div>
                </div>
                <div >
                    <div className="hostel_card">
                        <img src={hostel_image} alt="Check your network." className="hostel_img" />
                    </div>

                </div>
            </div>
        </container>
    );
}

export default Campus;