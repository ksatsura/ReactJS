//imports
import React from 'react';
import FilmAsset from '../FilmAsset/FilmAsset';
import '../style.css';
//constants
const key = 'qwert1';

const FilmCollection = (props) => {

    const { films, filmsNumber, filmsSameGenre, isFilmClicked } = props;

    const filmCollection = isFilmClicked ? filmsSameGenre : films;

    const collection = ( <ul className='film-collection' >
        { filmCollection.map((film, i) => <FilmAsset key={key+i} film={film} />) }
    </ul>);

    return (
        <div className='films-container'>
            { filmsNumber > 0 ? collection : <p className='no-films'>No films found</p> }
        </div>
    );   
};

export default FilmCollection;