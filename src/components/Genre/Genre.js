//imports
import * as React from 'react';
import '../../style.css';

// @flow
type Props = {
    genres: Array<string>
};

const Genre = (props: Props) => {
    
    const genres = props.genres.join(' & ');

    return <p className='second-title'>{genres}</p>;
};

export default Genre;