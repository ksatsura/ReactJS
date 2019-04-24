import * as actions from './filmActions.js';

describe('actions', () => {

    it('should create an action to set the film info request status in done', () => {
        const filmId = '123';
        const expectedAction = {
            type: 'REQUEST_FILM_INFO',
        };

        expect(actions.requestFilmInfo(filmId)).toEqual(expectedAction);
    });

    it('should create an action to save the received film info', () => {
        const film = { id: '123'};
        const filmId = '123';
        const expectedAction = {
            type: 'RECEIVE_FILM_INFO',
            film,
            filmId,
        };

        expect(actions.receiveFilmInfo(filmId, film)).toEqual(expectedAction);
    });

    it('should create an action to back to search', () => {
        const expectedAction = {
            type: 'BACK_TO_SEARCH',
        };

        expect(actions.backToSearch()).toEqual(expectedAction);
    });

    it('should create an action to invalidate film info request', () => {
        const expectedAction = {
            type: 'INVALIDATE_FILM_INFO',
        };

        expect(actions.invalidateRequest()).toEqual(expectedAction);
    });

});