//imports
import React from 'react';
import Poster from '../Poster/Poster';
import Info from '../Info/Info';
import { connect } from 'react-redux';
import { fetchRequestIfNeeded } from '../redux-utils/asyncActionUtils';
import '../style.css';

export const FilmAsset = (props) => {

    const { film, handleClick } = props;

    return (
        <div id={film.id} className='film-asset' onClick={(e) => handleClick(e, film.genres[0]) }>
            <Poster url={film.poster_path}  />
            <Info film={film} />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (e, genre) => { dispatch(fetchRequestIfNeeded(genre, true, e.currentTarget.id)); },
    };
};

export default connect(null, mapDispatchToProps)(FilmAsset);