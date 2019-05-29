//imports
import * as React from 'react';
import FilmPage from '../pages/FilmPage.js';
import NoResultsPage from '../pages/NoResultsPage';
import NotFoundPage from '../pages/NotFoundPage';
import SearchPage from '../pages/SearchPage';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import '../style.css';

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

        return (
            <AppDiv>
                <ErrorBoundary>
                    <Switch>
                        <Route exact path='/' component={NoResultsPage} />
                        <Route path='/film/:id' component={FilmPage} />
                        <Route path='/search/:value' component={SearchPage} />
                        <Route path='/' component={NotFoundPage} />
                    </Switch>
                </ErrorBoundary>
            </AppDiv>  
        );
    }
}

const mapStateToProps = state => {

    return {
        genre: (state.filmReducer.film.genres && state.filmReducer.film.genres[0]) || 'Drama',
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleUrlChange: (genre, id) => { dispatch(fetchRequestIfNeeded(genre, true, id)); },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);





