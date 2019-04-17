//imports
import React from 'react';
import FilmName from '../FilmName/FilmName';
import Genre from '../Genre/Genre';
import ReleaseDate from '../ReleaseDate/ReleaseDate';
import '../style.css';

export const Info = (props) => {

    const { asset } = props;

    return (
        <div className='asset-title'>
            <div className='first-title'>
                <FilmName title={asset.title} />
                <ReleaseDate date={asset.release_date} />
            </div>
            <Genre genres={asset.genres} />
        </div>
    );
};

export default Info;