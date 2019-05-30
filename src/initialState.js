export const initialState = {
    filmListReducer: {
        isFetching: false,
        didInvalidate: false,
        currentValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
        films: [],
        filmsSameGenre: [],
    },
    filmReducer: {
        film: {
            genres: [],
        },
    }
};