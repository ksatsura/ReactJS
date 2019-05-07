//imports
import React from 'react';
import FilmAsset from '../FilmAsset/FilmAsset';
import '../style.css';
import { Route, Switch }  from 'react-router-dom';
//constants
const key = 'qwert1';

const FilmCollection = (props) => {

    const { films, filmsNumber, filmsSameGenre } = props;

    const searchFilmCollection = (<ul className='film-collection' >
        { films.map((film, i) => <FilmAsset key={key+i} film={film} /> )}
    </ul>);

    const filmSameGenreCollection = (<ul className='film-collection' >
        { filmsSameGenre.map((film, i) => <FilmAsset key={key+i} film={film} /> )}
    </ul>);

    return (
        <div className='films-container'>
            { filmsNumber > 0 
                ? (<Switch>
                    <Route path='/search/Search :value' render={() => searchFilmCollection } />
                    <Route path='/film/:id' render={() => filmSameGenreCollection } />
                </Switch>)
                : <p className='no-films'>No films found</p> 
            }
        </div>
    );   
};

export default FilmCollection;