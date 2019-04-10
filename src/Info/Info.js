//imports
import React from 'react';
import FilmName from '../FilmName/FilmName.js';
import Genre from '../Genre/Genre.js';
import ReleaseDate from '../ReleaseDate/ReleaseDate.js';
import '../style.css';

const info = (props) => {

    return (
        <div className='asset-title'>
            <div className='first-title'>
                <FilmName title={props.title} />
                <ReleaseDate date={props.releaseDate} />
            </div>
            <Genre genre={props.genre} />
        </div>
    );
};

export default info;