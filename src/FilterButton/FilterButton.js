//imports
import React from 'react';
import '../style.css';

const filterButton = (props) => {
    return (
        <button id={props.id} className={props.styles} onClick={props.onClick}>{props.id}</button>
    );
};

export default filterButton;