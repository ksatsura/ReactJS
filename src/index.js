//imports
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from './reducers/combinedReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const initialState = {
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

const loggerMiddleware = createLogger();

const store = createStore(
    combinedReducer, 
    initialState, 
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware // neat middleware that logs actions
    ));

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
