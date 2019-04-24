export default (state = {
    isFetching: false,
    didInvalidate: false,
    film: { genres: []},
    filmId: '',
    isFilmClicked: false,
}, action) => {
    switch (action.type) {
    case 'INVALIDATE_FILM_INFO':
        return {...state,
            didInvalidate: true,
            isFetching: false,
        };
    case 'REQUEST_FILM_INFO':
        return {
            ...state,
            isFetching: true,
            didInvalidate: false,
        };
    case 'RECEIVE_FILM_INFO':
        return {
            ...state, 
            isFetching: false,
            film: action.film,
            filmId: action.filmId,
            isFilmClicked: true,
        };
    case 'BACK_TO_SEARCH':
        return {
            ...state,
            isFilmClicked: false,
        };
    default:
        return state;
    }
};