import React from "react";
import c1 from "./c1.jpg";
import "./Foot.css"
import Logo from "./Logo.png"
import Contact from '@material-ui/icons/PhoneRounded';
import Mail from "@material-ui/icons/MailRounded";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Linkdin from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (
        <container className="container">


            <div className="footer">

                <img src={c1} alt="" width="100%" height="350em" className="back" srcset="" />

                <div className="Contact">
                    <img src={Logo} alt="" width="58em" height="58em" className="logo" srcset="" />

                    <p className="name">
                        <p className="collegename">
                            Government College of Engineering,Karad
                        </p> <p class="vl"></p>
                        <p className="address">
                            Vidyanagar, Karad, Dist. Satara,<br></br>
                                    Maharashtra (India) - 415124
                        </p>
                        <p className="mail">
                            <Contact />  2164- 272414<br></br>
                            <Mail /> officialmail@gmail.com
                        </p>
                        <p className="social">
                            <Facebook /> <Twitter /> <Linkdin /> <Instagram />
                        </p>
                    </p>

                </div>
                <div className="quicklink">
                    <p className="quick">
                        Quick_Links
                    </p>
                    <p className="link">
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                    </p>
                </div>
                <div className="quicklink1">
                    <p className="quick1">
                        Explore
                    </p>
                    <p className="link1">
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                        Lorem<br></br>
                    </p>
                </div>
            </div>



        </container>

    );
}

export default Footer;