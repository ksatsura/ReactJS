//imports
import React from 'react';
import '../style.css';

export const GenreArea = (props) => {

    return <p className='film-genre'>Films by {props.genre} genre</p>;
};

export default GenreArea;