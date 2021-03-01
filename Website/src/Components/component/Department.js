import React from 'react';
import './Department.css';
import Cards from './Cards'
import Sdata from "./Sdata";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

function Department() {
    return (
        <container>
            <div className="header-camp">

            </div>
            <div>
                <h1 className="heading_style"><AccountBalanceIcon /> DEPARTMENT </h1>
                {Sdata.map((val) => {
                    return (
                        <Cards
                            imgsrc={val.imgsrc}
                            title={val.title}
                        />
                    );
                })}
            </div>


        </container>


    );
}

export default Department;