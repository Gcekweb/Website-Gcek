import React from 'react';
import AboutUs from "./AboutUs";
import Slider from "./Slider"
import News from "./News"
import Sb from "./Sb"
import './Home.css'

import Logo from "./images/college background white.png"


function Home() {
    return (
        <div>

            <figure className="position-relative">
                <div className="head">

                    <figCaption>
                        Government College of Engineering,Karad
                    </figCaption>
                    <div className="whiteLogo">
                        <img src={Logo} alt="" width="50em" height="50em" srcset="" />
                    </div>
                </div>
                <div>
                    <Sb />
                </div>
            </figure>
            <div>
                <News />
            </div>
            <div>
                <Slider />
            </div>
            <div>
                <AboutUs />
            </div>


        </div>
    );
}

export default Home;    