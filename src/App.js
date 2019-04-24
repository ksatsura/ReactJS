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

    const { films, isfilmClicked, genre, filmsSameGenre } = props;
    const filmsNumber = props.films.length;

    return (
        <div className='app'>
            <ErrorBoundary>
                <Header isfilmClicked={isfilmClicked} />
            </ErrorBoundary>
            <ErrorBoundary>
                <ResultsArea isfilmClicked={isfilmClicked} genre={genre} filmsNumber={filmsNumber} />
            </ErrorBoundary>
            <ErrorBoundary>
                <FilmCollection filmsNumber={filmsNumber} films={films} filmsSameGenre={filmsSameGenre} isfilmClicked={isfilmClicked} />
            </ErrorBoundary>
            <Footer/>
        </div>
    );
};

const mapStateToProps = state => {

    return {
        films: state.filmListReducer.films,
        isfilmClicked: state.filmReducer.isfilmClicked,
        genre: state.filmReducer.film.genres[0],
        filmsSameGenre: state.filmListReducer.filmsSameGenre,
    };
};

export default connect(mapStateToProps)(App);