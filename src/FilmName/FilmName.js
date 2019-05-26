//imports
import * as React from 'react';
import '../style.css';

// @flow
type Props = {
    title: string
};

const FilmName = (props: Props) => {

    return <p className='film-asset-name'>{props.title}</p>;
};

export default FilmName;