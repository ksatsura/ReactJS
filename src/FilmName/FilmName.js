//imports
import React from 'react';
import '../style.css';

const filmName = (props) => {

    return <p onClick={props.handleClick}>{props.title}</p>;
};

export default filmName;