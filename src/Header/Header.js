//imports
import React from 'react';
import SearchArea from '../SearchArea/SearchArea.js';
import CompanyTitle from '../CompanyTitle/CompanyTitle.js';
import '../style.css';

const header = (props) => {

    return (
        <div className='header'>
            <CompanyTitle />
            <SearchArea handleClick={props.handleClick} />
        </div>

    );
};

export default header;