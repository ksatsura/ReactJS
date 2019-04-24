//imports
import React from 'react';
import FilmInfo from '../FilmInfo/FilmInfo';
import Poster from '../Poster/Poster';
import { connect } from 'react-redux';
import { backToSearch } from '../actions/filmActions';
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import '../style.css';

export const FilmHeader = (props) => {

    const { film, handleClick } = props;

    return (
        <div className='film-info'>
            <div className='top-film-info'>
                <CompanyTitle />
                <button onClick={handleClick} className='search-navigation'>search</button>
            </div>
            <div className='film-poster-data'>
                <div className='poster'>
                    <Poster url={film.poster_path}/>
                </div>
                <FilmInfo film={film} />
            </div>
        </div>
    );
};

const mapStateToProps = state => {

    return {
        film: state.filmReducer.film,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { dispatch(backToSearch()); },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmHeader);