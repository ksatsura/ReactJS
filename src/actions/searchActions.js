import fetch from 'cross-fetch';

export const toggleSearchFilter = (filter) => {
    return {
        type: 'TOGGLE_SEARCH_FILTER',
        filter,
    };
};

export const toggleSortFilter = (id) => {
    
    return (dispatch, getState) => {
        const state = getState();
        const assets = sortByFilter(id, state.filmListReducer.assets);

        dispatch({
            type: 'TOGGLE_SORT_FILTER',
            id,
            assets,
        });
    };
};

export const searchFilmsByGenre = (genre) => {
    return {
        type: 'SEARCH_FILMS_BY_GENRE',
        genre,
    };
};

export const requestAssets = (searchValue) => {
    return { 
        type: 'REQUEST_ASSETS',
        searchValue,
    };
};

export const receiveAssets = (searchValue, json) => {
    return {
        type: 'RECEIVE_ASSETS',
        searchValue,
        assets: json.data,
    };
};

export const requestAssetsSameGenre = (searchValue) => {
    return { 
        type: 'REQUEST_ASSETS_SAME_GENRE',
        searchValue,
    };
};

export const receiveAssetsSameGenre = (searchValue, json) => {
    return {
        type: 'RECEIVE_ASSETS_SAME_GENRE',
        searchValue,
        assets: json.data,
    };
};

export const saveInputValue = (value) => {
    return {
        type: 'SAVE_INPUT_VALUE',
        value,
    };
};

export const invalidateParams = (searchValue) => {
    return {
        type: 'INVALIDATE_SEARCH',
        searchValue
    };
};

const shouldFetchAssets = (state) => {
    if ((state.searchValue && state.isFetching) || state.searchValue) {
        return false;
    } else if (!state.searchValue && !state.isFetching) {
        return true;
    } else {
        return state.didInvalidate;
    }
};
  
export const fetchAssetsIfNeeded = (searchValue, searchByGenre = false) => {

    return (dispatch, getState) => {
        const state = getState();
        if (shouldFetchAssets(state.filmListReducer, searchValue)) {
            return dispatch(fetchAssets(searchValue, state.filmListReducer, searchByGenre));
        } else {
            return Promise.resolve();
        }
    };
};

const fetchAssets = (searchValue, state, searchByGenre) => {

    let request;
    if (searchByGenre) {
        request = `https://reactjs-cdp.herokuapp.com/movies?search=${searchValue}&searchBy=genre&sortBy=${state.sortBy}`;
    } else {
        request = `https://reactjs-cdp.herokuapp.com/movies?search=${searchValue}&searchBy=${state.searchBy}&sortBy=${state.sortBy}`;
    }
    
    return (dispatch) => {
        searchByGenre ? dispatch(requestAssetsSameGenre(searchValue)) : dispatch(requestAssets(searchValue));
  
        return fetch(request, { mode: 'cors'} )
            .then(response => response.json() )
            .then(json => searchByGenre ? dispatch(receiveAssetsSameGenre(searchValue, json)) : dispatch(receiveAssets(searchValue, json)) )
            .catch(error => console.log('An error occurred.', error) );
    };
};

const sortByFilter = (id, assets) => {
    const assetsArray = [...assets];
    if (id === 'release_date') {
        return assetsArray.sort((a, b) => Date.parse(a.release_date) - Date.parse(b.release_date)).reverse();
    }
    return assetsArray.sort((a, b) => Number(a.vote_average) - Number(b.vote_average)).reverse();
};