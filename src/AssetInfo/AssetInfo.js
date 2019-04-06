//imports
import React from 'react';
import AssetData from '../AssetData/AssetData.js';
import Poster from '../Poster/Poster.js';
import CompanyTitle from '../CompanyTitle/CompanyTitle.js';
import '../style.css';

const assetInfo = (props) => {

    return (
        <div className='asset-info'>
            <div className='top-asset-info'>
                <CompanyTitle />
                <button onClick={props.handleBack} className='search-navigation'>search</button>
            </div>
            <div className='asset-poster-data'>
                <div className='poster'>
                    <Poster url={props.posterUrl}/>
                </div>
                <AssetData name={props.asset.title} date={props.asset.releaseDate} nomination={props.asset.nomination} description={props.asset.description} duration={props.asset.duration} rating={props.asset.rating} />
            </div>
        </div>
    );
};

export default assetInfo;