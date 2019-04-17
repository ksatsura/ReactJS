//imports
import React from 'react';
import '../style.css';

const AssetInfo = (props) => {

    const { asset } = props;

    return (
        <div className='asset-data'>
            <div className='asset-name-rating'>
                <p className='asset-name'>{asset.title}</p>
                <span className='asset-rating'>{asset.vote_average}</span>
            </div>
            <p className='asset-tagline'>{asset.tagline}</p>
            <div className='asset-date-duration'>
                <p className='asset-date'>{asset.release_date.slice(0,4)}</p>
                <p className='asset-duration'>{`${asset.runtime} min`}</p>
            </div>
            <p className='asset-description'>{asset.overview}</p>
        </div>
    );
};

export default AssetInfo;