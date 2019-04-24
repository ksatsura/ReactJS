export const requestFilmInfo = () => {
    return { 
        type: 'REQUEST_FILM_INFO',
    };
};

export const receiveFilmInfo = (id, json) => {
    
    return {
        type: 'RECEIVE_FILM_INFO',
        film: json,
        filmId: id,
    };
};

export const invalidateRequest = () => {
    return {
        type: 'INVALIDATE_FILM_INFO',
    };
};

export const backToSearch = () => {
    return {
        type: 'BACK_TO_SEARCH',
    };
};