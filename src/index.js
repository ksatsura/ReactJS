//imports
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import combinedReducer from './reducers/combinedReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { initialState } from './initialState';

const loggerMiddleware = createLogger();
const persistConfig = {
    key: 'root',
    storage,
};
const persisteedReducer = persistReducer(persistConfig, combinedReducer);
export const store = createStore(
    persisteedReducer, 
    initialState, 
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
);
const persistor = persistStore(store);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

ReactDom.render(<Provider store={store}><PersistGate loading={null} persistor={persistor}><App /></PersistGate></Provider>, document.getElementById('app'));
