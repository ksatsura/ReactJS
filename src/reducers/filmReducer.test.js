import reducer from './filmReducer.js';

describe('filmReducer.js', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            isFetching: false,
            didInvalidate: false,
            film: { genres: []},
            filmId: '',
            isFilmClicked: false,
        });
    });
  
    it('should handle REQUEST_FILM_INFO', () => {
        // expect(
        //     reducer({}, {
        //         type: 'REQUEST_FILM_INFO',
        //         filmId: '123',
        //     })
        // ).toEqual({
        //     isFetching: true,
        //     didInvalidate: false,
        //     filmId: '123',
        //     film: {},
        //     isFilmClicked: false,
        // });
  
        expect(
            reducer({
                isFetching: false,
                didInvalidate: false,
                filmId: '123',
                film: {id: '123'},
                isFilmClicked: false},
            {
                type: 'REQUEST_FILM_INFO',
            })
        ).toEqual({
            isFetching: true,
            didInvalidate: false,
            filmId: '123',
            film: {id: '123'},
            isFilmClicked: false,
        });
    });

    it('should handle RECEIVE_FILM_INFO', () => {
        expect(
            reducer({
                isFetching: true,
                didInvalidate: false,
                filmId: '123',
                film: {id: '123'},
                isFilmClicked: false
            }, {
                type: 'RECEIVE_FILM_INFO',
                filmId: '321',
                film: { id: '321'}
            })
        ).toEqual({
            isFetching: false,
            didInvalidate: false,
            filmId: '321',
            film: { id: '321'},
            isFilmClicked: true,
        });
    });

    it('should handle BACK_TO_SEARCH', () => {
        expect(
            reducer({
                isFetching: false,
                didInvalidate: false,
                filmId: '123',
                film: {id: '123'},
                isFilmClicked: false
            }, {
                type: 'BACK_TO_SEARCH',
            })
        ).toEqual({
            isFetching: false,
            didInvalidate: false,
            film: { id: '123'},
            filmId: '123',
            isFilmClicked: false,
        });
    });

    it('should handle INVALIDATE_FILM_INFO', () => {
        expect(
            reducer({
                isFetching: true,
                didInvalidate: false,
                filmId: '123',
                film: {id: '123'},
                isFilmClicked: false
            }, {
                type: 'INVALIDATE_FILM_INFO',
            })
        ).toEqual({
            isFetching: false,
            didInvalidate: true,
            filmId: '123',
            film: {id: '123'},
            isFilmClicked: false,
        });
    });
});