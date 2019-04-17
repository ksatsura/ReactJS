export default (state = {
    isFetching: false,
    didInvalidate: false,
    searchBy: 'title',
    sorthBy: 'release_date',
    assets: [],
    currentValue: '',
}, action) => {
    switch (action.type) {
    case 'INVALIDATE_SEARCH':
        return {
            ...state,
            didInvalidate: true,
            // currentValue: '',
        };
    case 'REQUEST_ASSETS':
        return {
            ...state,
            isFetching: true,
            didInvalidate: false
        };
    case 'SAVE_INPUT_VALUE':
        return {
            ...state,
            currentValue: action.value,
        };
    case 'RECEIVE_ASSETS':
        return {
            ...state, 
            isFetching: false,
            didInvalidate: false,
            assets: action.assets,
            //currentSearchValue: '',
        };
    case 'TOGGLE_SEARCH_FILTER':
        return {
            ...state,
            searchBy: action.filter,
        };
    case 'TOGGLE_SORT_FILTER':
        return {
            ...state,
            assets: action.assets,
            sortBy: action.id,
        };
    case 'REQUEST_ASSETS_SAME_GENRE':
        return {
            ...state,
            isFetchingAssetsSameGenre: true,
            didInvalidateAssetsSameGenre: false
        };
    case 'RECEIVE_ASSETS_SAME_GENRE':
        return {
            ...state, 
            isFetchingAssetsSameGenre: false,
            didInvalidateAssetsSameGenre: false,
            assetsSameGenre: action.assets,
        };
    default:
        return state;
    }
};