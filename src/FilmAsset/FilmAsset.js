//imports
import React from 'react';
import Poster from '../Poster/Poster.js';
import Info from '../Info/Info.js';
import '../style.css';

const filmAsset = (props) => { 

    return (
        <div className='film-asset' onClick={props.handleClick} >
            <Poster url={props.url}  />
            <Info releaseDate={props.releaseDate} title={props.title} genre={props.genre} />
        </div>
    );
};

export default filmAsset;