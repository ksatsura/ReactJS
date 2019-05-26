//imports
import React, { Component } from 'react';
import Header from './Header/Header.js';
import FilmCollection from './FilmCollection/FilmCollection';
import Footer from './Footer/Footer.js';
import ResultsArea from './ResultsArea/ResultsArea';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { fetchRequestIfNeeded } from './redux-utils/asyncActionUtils';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.handleUrlChange(id);
        }
    }

    render() {

        const { films, genre, filmsSameGenre } = this.props;
        const filmsNumber = this.props.films.length;

        return (
            <div className='app'>
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
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        films: state.filmListReducer.films,
        genre: state.filmReducer.film.genres[0],
        filmsSameGenre: state.filmListReducer.filmsSameGenre,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleUrlChange: (id) => { dispatch(fetchRequestIfNeeded('Drama', true, id)); },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);