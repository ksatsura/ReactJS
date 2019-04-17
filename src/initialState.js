export const initialState = {
    filmListReducer: {
        isFetching: false,
        didInvalidate: false,
        currentValue: '',
        searchBy: 'title',
        sortBy: 'release_date',
        assets: [],
        assetsSameGenre: [],
    },
    assetReducer: {
        asset: {
            genres: [],
        },
        isAssetClicked: false,
    }
};