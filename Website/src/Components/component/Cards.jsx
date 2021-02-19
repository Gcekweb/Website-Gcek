import React from 'react';

import './Department.css';

    
    
function Card(props) {
    return(
         <div className="cards">
    <div className="card">
    <img src={props.imgsrc} alt="myPic" className="card_img"/>
    <div className="card_info">
    <span className="card_category"> </span>
    <h3 className="card_title">{props.title}</h3>
    
    
    <button> More Info </button>
    
    </div>
    </div>
    </div>
    );
}

export default Card;