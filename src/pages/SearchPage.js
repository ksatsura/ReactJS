// import
import React from 'react';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import FilmCollection from '../components/FilmCollection/FilmCollection';
import ResultsArea from '../components/ResultsArea/ResultsArea';
import Footer from '../components/Footer/Footer';
import { fetchRequestIfNeeded } from '../redux-utils/asyncActionUtils';
import { connect } from 'react-redux';
import '../style.css';

const SearchPage = (props) => {

    const { genre, films} = props;

    return (
        <React.Fragment>
            <SearchHeader />
            <ResultsArea filmsNumber={films.length} />
            <FilmCollection films={films} noResults={false} />
            <Footer />
        </React.Fragment>
    );
};

const mapStateToProps = state => {

    return {
        films: state.filmListReducer.films,
        genre: (state.filmReducer.film.genres && state.filmReducer.film.genres[0]) || 'Drama',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleUrlChange: (genre, id) => { dispatch(fetchRequestIfNeeded(genre, true, id)); },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);