//imports
import * as React from 'react';
import FilmAsset from '../FilmAsset/FilmAsset';
import '../../style.css';
//constants
const key = 'qwert1';

// @flow
type Props = {
    films: Array<{}>,
    noResults: boolean,
};

const FilmCollection = (props: Props) => {

    const { films, noResults } = props;

    const filmCollection = !noResults && (<ul className='film-collection' >
        { films.map((film, i) => <FilmAsset key={key+i} film={film} /> )}
    </ul>);

    return (
        <div className='films-container'>
            { (noResults || films.length > 0)
                ? filmCollection
                : <p className='no-films'>No films found</p> 
            }
        </div>
    );   
};

const mapDispatchToProps = dispatch => {
    return {
        handleUrlChange: (genre, id) => { dispatch(fetchRequestIfNeeded(genre, true, id)); },
    };
};

export default FilmCollection;