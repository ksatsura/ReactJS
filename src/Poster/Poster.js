//imports
import React from 'react';
import '../style.css';

const poster = (props) => {
    
    return <img src={props.url} alt='Poster' height='400px' width='285p' />;
};

export default poster;