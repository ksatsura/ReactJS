//imports
import React from 'react';
import Header from './Header/Header.js';
import FilmCollection from './FilmCollection/FilmCollection';
import Footer from './Footer/Footer.js';
import ResultsArea from './ResultsArea/ResultsArea';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { connect } from 'react-redux';
import './style.css';

const App = (props) => {

    const { films, isFilmClicked, genre, filmsSameGenre } = props;
    const filmsNumber = props.films.length;

    return (
        <div className='app'>
            <ErrorBoundary>
                <Header isFilmClicked={isFilmClicked} />
            </ErrorBoundary>
            <ErrorBoundary>
                <ResultsArea isFilmClicked={isFilmClicked} genre={genre} filmsNumber={filmsNumber} />
            </ErrorBoundary>
            <ErrorBoundary>
                <FilmCollection filmsNumber={filmsNumber} films={films} filmsSameGenre={filmsSameGenre} isFilmClicked={isFilmClicked} />
            </ErrorBoundary>
            <Footer/>
        </div>
    );
};

const mapStateToProps = state => {

    return {
        films: state.filmListReducer.films,
        isFilmClicked: state.filmReducer.isFilmClicked,
        genre: state.filmReducer.film.genres[0],
        filmsSameGenre: state.filmListReducer.filmsSameGenre,
    };
};

export default connect(mapStateToProps)(App);