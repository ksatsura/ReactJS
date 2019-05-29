// import
import React from 'react';
import FilmHeader from '../components/FilmHeader/FilmHeader';
import FilmCollection from '../components/FilmCollection/FilmCollection';
import ResultsArea from '../components/ResultsArea/ResultsArea';
import Footer from '../components/Footer/Footer';
import { fetchRequestIfNeeded } from '../redux-utils/asyncActionUtils';
import { connect } from 'react-redux';

import '../style.css';

const FilmPage = (props) => {

    const { location, match, films, genre } = props;

    return (
        <React.Fragment>
            <FilmHeader location={location} match={match}/>
            <ResultsArea genre={genre}/>
            <FilmCollection films={films} />
            <Footer />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        genre: (state.filmReducer.film.genres && state.filmReducer.film.genres[0]) || 'Drama',
        films: state.filmListReducer.filmsSameGenre
    };
};

export default connect(mapStateToProps)(FilmPage);