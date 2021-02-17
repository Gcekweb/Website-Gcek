import React from "react";
import './Campus.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import c1 from './c1.jpg';
const map_image = "https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?pid=Api&rs=1";
const hostel_image = "https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?pid=Api&rs=1";

function Campus() {
    return (
        <container>
            <div className="official_card">
                <a href={'gcekarad'}>
                    <img src={c1} alt="Check your network." className="official_img" /></a>
            </div>
            <div >
                <div className="map_card">
                    <a href={'gcekarad.ac.in'} >
                        <img src={map_image} alt="Check your network." className="map_img" /></a>
                </div>
            </div>
            <div >
                <div className="hostel_card">
                    <img src={hostel_image} alt="Check your network." className="hostel_img" />
                </div>

            </div>

        </container>
    );
}

export default Campus;