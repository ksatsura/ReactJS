import reducer from './filmListReducer.js';

describe('filmListReducer.js', () => {

    const initialState = {
        isFetching: false,
        didInvalidate: false,
        searchBy: 'title',
        sorthBy: 'release_date',
        films: [],
        currentValue: '',
        isFetchingFilmsSameGenre: false,
        didInvalidateFilmsSameGenre: false,
        filmsSameGenre: [],
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
  
    it('should handle REQUEST_FILMS', () => {

        // expect(
        //     reducer({}, {
        //         type: 'REQUEST_FILMS',
        //     })
        // ).toEqual({
        //     ...initialState,
        //     isFetching: true,
        // });
  
        expect(
            reducer({
                ...initialState,
                films: [{title: '1'}, {title: '2'}],
            },{
                type: 'REQUEST_FILMS',
            })
        ).toEqual({
            ...initialState,
            isFetching: true,
            films: [{title: '1'}, {title: '2'}],
        });
    });

    it('should handle RECEIVE_FILMS', () => {
        expect(
            reducer({
                ...initialState,
                isFetching: true,
                films: [{title: '1'}, {title: '2'}],
            }, {
                type: 'RECEIVE_FILMS',
                films: [{title: '3'}, {title: '4'}],
                searchValue: 'Test1',
            })
        ).toEqual({
            ...initialState,
            isFetching: false,
            currentValue: 'Test1',
            films: [ {title: '3'}, {title: '4'} ],
        });
    });

    it('should handle REQUEST_FILMS_SAME_GENRE', () => {
        // expect(
        //     reducer({}, {
        //         type: 'REQUEST_FILMS_SAME_GENRE',
        //     })
        // ).toEqual({
        //     ...initialState,
        //     isFetchingFilmsSameGenre: true,
        // });
  
        expect(
            reducer({
                ...initialState,
                films: [{title: '3'}, {title: '4'}]
            },{
                type: 'REQUEST_FILMS_SAME_GENRE',
            })
        ).toEqual({
            ...initialState,
            isFetchingFilmsSameGenre: true,
            films: [{title: '3'}, {title: '4'}],
        });
    });

    it('should handle RECEIVE_FILMS_SAME_GENRE', () => {
        expect(
            reducer({
                ...initialState,
                isFetchingFilmsSameGenre: true,
                filmsSameGenre: [{title: '1'}, {title: '2'}],
            }, {
                type: 'RECEIVE_FILMS_SAME_GENRE',
                films: [{title: '3'}, {title: '4'}],

            })
        ).toEqual({
            ...initialState,
            isFetchingFilmsSameGenre: false,
            filmsSameGenre: [ {title: '3'}, {title: '4'} ],
        });
    });

    it('should handle TOGGLE_SEARCH_FILTER', () => {
        expect(
            reducer({
                ...initialState,
                films: [{title: '3'}, {title: '4'}],
            }, {
                type: 'TOGGLE_SEARCH_FILTER',
                filter: 'genre',
            })
        ).toEqual({
            ...initialState,
            films: [{title: '3'}, {title: '4'}],
            searchBy: 'genre',
        });
    });

    it('should handle TOGGLE_SORT_FILTER', () => {
        expect(
            reducer({
                ...initialState,
                films: [{vote_average: '3'}, {vote_average: '5'}, {vote_average: '2'}],
            }, {
                type: 'TOGGLE_SORT_FILTER',
                id: 'vote_average',
            })
        ).toEqual({
            ...initialState,
            films: [{vote_average: '5'}, {vote_average: '3'}, {vote_average: '2'}],
            sortBy: 'vote_average',
        });
    });

    it('should handle SAVE_INPUT_VALUE', () => {
        expect(
            reducer({
                ...initialState,
                films: [{title: '3'}, {title: '4'}],
            }, {
                type: 'SAVE_INPUT_VALUE',
                value: 'Test1',
            })
        ).toEqual({
            ...initialState,
            films: [{title: '3'}, {title: '4'}],
            currentValue: 'Test1',
        });
    });

    it('should handle INVALIDATE_SEARCH', () => {
        expect(
            reducer({
                ...initialState,
                isFetching: true,
            }, {
                type: 'INVALIDATE_SEARCH',
            })
        ).toEqual({
            ...initialState,
            didInvalidate: true,
            isFetching: false,
        });
    });

    it('should handle INVALIDATE_SEARCH_SAME_GENRE', () => {
        expect(
            reducer({
                ...initialState,
                isFetchingFilmsSameGenre: true,
            }, {
                type: 'INVALIDATE_SEARCH_SAME_GENRE',
            })
        ).toEqual({
            ...initialState,
            didInvalidateFilmsSameGenre: true,
            isFetchingFilmsSameGenre: false,
        });
    });
});