import fetch from 'cross-fetch';
import { 
    requestFilmsSameGenre, 
    requestFilms, 
    receiveFilmsSameGenre,
    receiveFilms,
    invalidateParams,
    invalidateParamsSameGenre,
} from '../actions/searchActions';
import {
    requestFilmInfo,
    receiveFilmInfo,
    invalidateRequest,
} from  '../actions/filmActions';

const shouldFetchRequest = (state, searchValue, filmId) => {
    if ((searchValue && state.isFetching) || (filmId && state.isFetching)) {
        return false;
    } else if ((searchValue && !state.isFetching) || (filmId && !state.isFetching)) {
        return true;
    } else {
        return state.didInvalidate;
    }
};
  
export const fetchRequestIfNeeded = (searchValue, searchByGenre, filmId) => {

    return (dispatch, getState) => {
        const state = getState();
        const shouldFetch = (searchValue && shouldFetchRequest(state.filmListReducer, searchValue))
        || (filmId && shouldFetchRequest(state.filmReducer, null, filmId));

        if (shouldFetch) {
            return (searchValue && dispatch(fetchRequest(searchValue, state.filmListReducer, searchByGenre)))
            || (filmId && dispatch(fetchRequest(searchValue, state.filmReducer, searchByGenre, filmId)));
        } else {
            return Promise.resolve();
        }
    };
};

const fetchRequest = (searchValue, state, searchByGenre, filmId) => {

    let request;
    if (searchByGenre || (state.searchBy === 'genre')) {
        request = `https://reactjs-cdp.herokuapp.com/movies?search=${searchValue}&searchBy=genre&sortBy=${state.sortBy}`;
    } else if (filmId) {
        request = `https://reactjs-cdp.herokuapp.com/movies/${filmId}`;
    } else { 
        request = `https://reactjs-cdp.herokuapp.com/movies?search=${searchValue}&searchBy=${state.searchBy}&sortBy=${state.sortBy}`;
    }
    
    return (dispatch) => {
        searchByGenre 
            ? dispatch(requestFilmsSameGenre()) 
            : filmId 
                ? dispatch(requestFilmInfo())
                : dispatch(requestFilms());
  
        return fetch(request, { mode: 'cors'} )
            .then(response => response.json(), error => { 
                console.log('An error occurred.', error);
                searchByGenre &&  invalidateParamsSameGenre();
                (filmId && dispatch(invalidateRequest())) || dispatch(invalidateParams()); })
            .then(json => searchByGenre 
                ? dispatch(receiveFilmsSameGenre(json)) 
                : (filmId 
                    ? dispatch(receiveFilmInfo(filmId, json)) 
                    : dispatch(receiveFilms(json))) )
            .catch(error => console.log('An error occurred.', error) );
    };
};