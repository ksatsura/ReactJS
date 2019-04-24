const sortByFilter = (id, films) => {
    const filmsArray = [...films];
    if (id === 'release_date') {
        return filmsArray.sort((a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)).reverse();
    }
    return filmsArray.sort((a, b) => Number(a.vote_average) - Number(b.vote_average)).reverse();
};

export default (state = {
    isFetching: false,
    didInvalidate: false,
    searchBy: 'title',
    sorthBy: 'release_date',
    films: [],
    currentValue: '',
    isFetchingFilmsSameGenre: false,
    didInvalidateFilmsSameGenre: false,
    filmsSameGenre: []
}, action) => {
    switch (action.type) {
    case 'INVALIDATE_SEARCH':
        return {
            ...state,
            didInvalidate: true,
            isFetching: false,
        };
    case 'REQUEST_FILMS':
        return {
            ...state,
            isFetching: true,
        };
    case 'SAVE_INPUT_VALUE':
        return {
            ...state,
            currentValue: action.value,
        };
    case 'RECEIVE_FILMS':
        return {
            ...state, 
            isFetching: false,
            didInvalidate: false,
            films: action.films,
            currentValue: action.searchValue,
        };
    case 'TOGGLE_SEARCH_FILTER':
        return {
            ...state,
            searchBy: action.filter,
        };
    case 'TOGGLE_SORT_FILTER':
        return {
            ...state,
            films: sortByFilter(action.id, state.films),
            sortBy: action.id,
        };
    case 'REQUEST_FILMS_SAME_GENRE':
        return {
            ...state,
            isFetchingFilmsSameGenre: true,
        };
    case 'RECEIVE_FILMS_SAME_GENRE':
        return {
            ...state, 
            isFetchingFilmsSameGenre: false,
            filmsSameGenre: action.films,
        };
    case 'INVALIDATE_SEARCH_SAME_GENRE':
        return {
            ...state,
            didInvalidateFilmsSameGenre: true,
            isFetchingFilmsSameGenre: false,
        };
    default:
        return state;
    }
};