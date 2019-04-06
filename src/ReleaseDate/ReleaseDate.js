//imports
import React from 'react';
import '../style.css';

const releaseDate = (props) => {

    return <p className='release-date' onClick={props.handleClick}>{props.date}</p>;
};

export default releaseDate;