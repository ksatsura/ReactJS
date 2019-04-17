export default (state = {
    isFetching: false,
    didInvalidate: false,
    asset: {},
    assetId: '',
    isAssetClicked: false,
}, action) => {
    switch (action.type) {
    case 'INVALIDATE_ASSET_INFO':
        return {...state,
            didInvalidate: true,
            assetId: '',
        };
    case 'REQUEST_POST':
        return {
            ...state,
            isFetching: true,
            didInvalidate: false,
        };
    case 'RECEIVE_POST':
        return {
            ...state, 
            isFetching: false,
            didInvalidate: false,
            asset: action.asset,
            assetId: '',
            isAssetClicked: true,
        };
    case 'BACK_TO_SEARCH':
        return {
            ...state,
            isAssetClicked: false,
            asset: {
                genres: []
            },
            assetId: '',
        };
    default:
        return state;
    }
};