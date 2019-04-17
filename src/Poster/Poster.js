//imports
import React from 'react';
import '../style.css';

const Poster = (props) => {
    
    return <img src={props.url} alt='Poster' height='400px' width='285p' />;
};

export default Poster;