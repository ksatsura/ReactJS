//imports
import * as React from 'react';
import FilmInfo from '../FilmInfo/FilmInfo';
import Poster from '../Poster/Poster';
import { connect } from 'react-redux';
import { backToSearch } from '../actions/filmActions';
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import { Link }  from 'react-router-dom';
import '../style.css';

// @flow
type Props = {
    film: {
        poster_path: string,

    },
    handleClick: () =>  void,
    filmsSameGenre: Array<{}>,
    value: string
};

export const FilmHeader = (props: Props) => {

    const { film, handleClick, value } = props;

    return (
        <div className='film-info'>
            <div className='top-film-info'>
                <CompanyTitle />
                <Link to={`/search/${value}`}>
                    <button onClick={handleClick} className='search-navigation'>search</button>
                </Link>
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
        value: state.filmListReducer.currentValue,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { dispatch(backToSearch()); },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmHeader);