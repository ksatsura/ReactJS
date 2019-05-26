//imports
import * as React from 'react';

// @flow
type Props = {
    url: string
};

const Poster = (props: Props) => {
    
    return <img src={props.url} alt='Poster' height='400px' width='285p' />;
};

export default Poster;