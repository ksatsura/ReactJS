//imports
import React from 'react';
import '../style.css';

const FilmInfo = (props) => {

    const { film } = props;

    return (
        <div className='film-data'>
            <div className='film-name-rating'>
                <p className='film-name'>{film.title}</p>
                <span className='film-rating'>{film.vote_average}</span>
            </div>
            <p className='film-tagline'>{film.tagline}</p>
            <div className='film-date-duration'>
                <p className='film-date'>{film.release_date.slice(0,4)}</p>
                <p className='film-duration'>{`${film.runtime} min`}</p>
            </div>
            <p className='film-description'>{film.overview}</p>
        </div>
    );
};

export default FilmInfo;