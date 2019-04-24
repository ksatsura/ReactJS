export const toggleSearchFilter = (filter) => {
    return {
        type: 'TOGGLE_SEARCH_FILTER',
        filter,
    };
};

export const toggleSortFilter = (id) => {

    return {
        type: 'TOGGLE_SORT_FILTER',
        id,
    };
};

export const searchFilmsByGenre = (genre) => {
    return {
        type: 'SEARCH_FILMS_BY_GENRE',
        genre,
    };
};

export const requestFilms = (searchValue) => {
    return { 
        type: 'REQUEST_FILMS',
        searchValue,
    };
};

export const receiveFilms = (searchValue, json) => {
    return {
        type: 'RECEIVE_FILMS',
        films: json.data,
        searchValue
    };
};

export const requestFilmsSameGenre = (searchValue) => {
    return { 
        type: 'REQUEST_FILMS_SAME_GENRE',
        searchValue,
    };
};

export const receiveFilmsSameGenre = (json) => {
    return {
        type: 'RECEIVE_FILMS_SAME_GENRE',
        films: json.data,
    };
};

export const saveInputValue = (value) => {
    return {
        type: 'SAVE_INPUT_VALUE',
        value,
    };
};

export const invalidateParams = () => {
    return {
        type: 'INVALIDATE_SEARCH',
    };
};

export const invalidateParamsSameGenre = () => {
    return {
        type: 'INVALIDATE_SEARCH_SAME_GENRE',
    };
};
