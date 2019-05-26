//imports
import * as React from 'react';
import Header from './Header/Header.js';
import FilmCollection from './FilmCollection/FilmCollection';
import Footer from './Footer/Footer.js';
import ResultsArea from './ResultsArea/ResultsArea';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { fetchRequestIfNeeded } from './redux-utils/asyncActionUtils';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';

const AppDiv = styled.div`
    font-family: Arial;
    width: 100%;
    height: 100%;
`;


// @flow
type Props = {
    films: Array<{}>, 
    genre: string, 
    filmsSameGenre: Array<{}>,
    match: {
        params: {
            id: string
        }
    },
    handleUrlChange: (string) => void
};

class App extends React.Component<Props> {

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.handleUrlChange(this.props.genre, id);
        }
    }

    render() {

        const { films, genre, filmsSameGenre } = this.props;
        const filmsNumber = this.props.films.length;

        return (
            <AppDiv>
                <ErrorBoundary>
                    <Switch>
                        <Route path='/' render={() => <Header /> } />
                        <Route path='/film/:id' render={() => <Header /> } />
                        <Route path='/search/:value' render={() => <Header /> } />
                    </Switch>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Switch>
                        <Route exact path='/' render={() => <ResultsArea genre={genre} filmsNumber={0} /> } />
                        <Route path='/film/:id' render={() => <ResultsArea genre={genre} filmsNumber={filmsNumber} /> } />
                        <Route path='/search/:value' render={() => <ResultsArea genre={genre} filmsNumber={filmsNumber} /> } />
                    </Switch>
                </ErrorBoundary>
                <ErrorBoundary>
                    <Switch>
                        <Route exact path='/' render={() => <FilmCollection filmsNumber={0} films={[]} filmsSameGenre={filmsSameGenre} /> } />
                        <Route path='/film/:id' render={() => <FilmCollection filmsNumber={filmsNumber} films={films} filmsSameGenre={filmsSameGenre} /> } />
                        <Route path='/search/:value' render={() => <FilmCollection filmsNumber={filmsNumber} films={films} filmsSameGenre={filmsSameGenre} /> } />
                    </Switch>
                </ErrorBoundary>
                <Route path='/' render={() => <Footer/> } />
            </AppDiv>
        );
    }
}

const mapStateToProps = state => {

    return {
        films: state.filmListReducer.films,
        genre: (state.filmReducer.film.genres && state.filmReducer.film.genres[0]) || 'Drama',
        filmsSameGenre: state.filmListReducer.filmsSameGenre,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleUrlChange: (genre, id) => { dispatch(fetchRequestIfNeeded(genre, true, id)); },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);