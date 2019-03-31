//imports
import React from 'react';
import '../style.css';

const assetData = (props) => {

    return (
        <div className='asset-data'>
            <div className='asset-name-rating'>
                <p className='asset-name'>{props.name}</p>
                <p className='asset-rating'>{props.rating}</p>
            </div>
            <p className='asset-nomination'>{props.nomination}</p>
            <div className='asset-date-duration'>
                <p className='asset-date'>{props.date}</p>
                <p className='asset-duration'>{props.duration}</p>
            </div>
            <p className='asset-description'>{props.description}</p>
        </div>
    );
};

export default assetData;