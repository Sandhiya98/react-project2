import React from 'react';
import './Card.css';
// this is an example comment
//comment from sandy
function Card(props){
    const classes ='Card' + props.className;
    return<div className={classes}>{props.children}</div>


}
export default Card;