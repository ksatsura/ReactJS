
import * as actions from './searchActions.js';

describe('actions', () => {

    it('should create an action to toggle search filter', () => {
        const filter = 'title';
        const expectedAction = {
            type: 'TOGGLE_SEARCH_FILTER',
            filter,
        };
        expect(actions.toggleSearchFilter(filter)).toEqual(expectedAction);
    });

    it('should create an action to toggle sort filter', () => {
        const id = 'release_date';
        const expectedAction = {
            type: 'TOGGLE_SORT_FILTER',
            id,
        };

        expect(actions.toggleSortFilter(id)).toEqual(expectedAction);
    });

    it('should create an action to search films by genre', () => {
        const genre = 'Drama';
        const expectedAction = {
            type: 'SEARCH_FILMS_BY_GENRE',
            genre,
        };

        expect(actions.searchFilmsByGenre(genre)).toEqual(expectedAction);
    });

    it('should create an action to set the search request status in done', () => {
        const searchValue = 'Test';
        const expectedAction = {
            type: 'REQUEST_FILMS',
            searchValue,
        };

        expect(actions.requestFilms(searchValue)).toEqual(expectedAction);
    });

    it('should create an action to save the received films', () => {
        const searchValue = 'Test';
        const films = { data: ['1', '2'] };
        const expectedAction = {
            type: 'RECEIVE_FILMS',
            searchValue,
            films: films.data,
        };

        expect(actions.receiveFilms(searchValue, films)).toEqual(expectedAction);
    });

    it('should create an action to set the search by the same genre request status in done', () => {
        const searchValue = 'Test';
        const expectedAction = {
            type: 'REQUEST_FILMS_SAME_GENRE',
            searchValue,
        };

        expect(actions.requestFilmsSameGenre(searchValue)).toEqual(expectedAction);
    });

    it('should create an action to save the received films by the same genre', () => {
        const films = { data: ['1', '2'] };
        const expectedAction = {
            type: 'RECEIVE_FILMS_SAME_GENRE',
            films : films.data,
        };

        expect(actions.receiveFilmsSameGenre(films)).toEqual(expectedAction);
    });

    it('should create an action to save input value', () => {
        const value = 'Test';
        const expectedAction = {
            type: 'SAVE_INPUT_VALUE',
            value,
        };

        expect(actions.saveInputValue(value)).toEqual(expectedAction);
    });

    it('should create an action to invalidate search request', () => {
        const expectedAction = {
            type: 'INVALIDATE_SEARCH',
        };

        expect(actions.invalidateParams()).toEqual(expectedAction);
    });
});