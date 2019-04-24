//imports
import React from 'react';
import '../style.css';

const Genre = (props) => {
    
    const genres = props.genres.join(' & ');

    return <p className='second-title'>{genres}</p>;
};

export default Genre;