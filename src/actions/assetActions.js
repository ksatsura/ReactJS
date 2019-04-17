import { fetchAssetsIfNeeded } from './searchActions.js';

export const requestPost = (assetId) => {
    return { 
        type: 'REQUEST_POST',
        assetId,
    };
};

export const receivePost = (assetId, json) => {
    
    return {
        type: 'RECEIVE_POST',
        assetId,
        asset: json,
    };
};

export const invalidateParams = (assetId) => {
    return {
        type: 'INVALIDATE_ASSET_INFO',
        assetId
    };
};

export const backToSearch = () => {
    return {
        type: 'BACK_TO_SEARCH',
    };
};


const shouldFetchPost = (state) => {
    if ((state.assetId && state.isFetching) || state.assetId) {
        return false;
    } else if (!state.assetId && !state.isFetching) {
        return true;
    } else {
        return state.didInvalidate;
    }
};
  
export const fetchPostIfNeeded = (assetId) => {

    return (dispatch, getState) => {
        const state = getState();
        if (shouldFetchPost(state.assetReducer, assetId)) {
            return dispatch(fetchPost(assetId, state.assetReducer));
        } else {
            return Promise.resolve();
        }
    };
};

const fetchPost = (assetId) => {
    
    return (dispatch) => {
        dispatch(requestPost(assetId));
  
        return fetch(`https://reactjs-cdp.herokuapp.com/movies/${assetId}`, { mode: 'cors'} )
            .then(response => response.json(), error => { console.log('An error occurred.', error); dispatch(invalidateParams()); } )
            .then(json => { dispatch(receivePost(assetId, json)); dispatch(fetchAssetsIfNeeded(json.genres[0], true)); } )
            .catch(error => console.log('An error occurred.', error) );
    };
};
