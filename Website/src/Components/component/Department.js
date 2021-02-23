import React from 'react';
import './Department.css';
import Cards from './Cards'
import Sdata from "./Sdata";
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';

function Department() {
    return (
        <container>
            <div>
                <h1 className="heading_style"><AccountBalanceTwoToneIcon /> DEPARTMENT </h1>
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