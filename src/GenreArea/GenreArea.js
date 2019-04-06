//imports
import React from 'react';
import '../style.css';

const genreArea = (props) => {

    return (<div className='search-results'>
        <p className='asset-genre'>Films by {props.genre} genre</p>
    </div>);
};

export default genreArea;