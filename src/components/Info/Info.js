//imports
import React from 'react';
import FilmName from '../FilmName/FilmName';
import Genre from '../Genre/Genre';
import ReleaseDate from '../ReleaseDate/ReleaseDate';
import '../../style.css';

export const Info = (props) => {

    const { film } = props;

    return (
        <div className='film-title'>
            <div className='first-title'>
                <FilmName title={film.title} />
                <ReleaseDate date={film.release_date} />
            </div>
            <Genre genres={film.genres} />
        </div>
    );
};

export default Info;