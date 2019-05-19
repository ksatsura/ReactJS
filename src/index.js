//imports
import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Provider } from 'react-redux';
import combinedReducer from './reducers/combinedReducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { initialState } from './initialState';
import { Error404 } from './Error404/Error404';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const loggerMiddleware = createLogger();
const persistConfig = {
    key: 'root',
    storage,
};
const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const persisteedReducer = persistReducer(persistConfig, combinedReducer);
export const store = createStore(
    persisteedReducer, 
    preloadedState, 
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
    )
);
const persistor = persistStore(store);

hydrate(
    (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/film/:id" component={App} />
                    <Route path="/search/:value" component={App} />
                    <Route path="/" component={Error404} />
                </Switch>
            </Router>
        </PersistGate>
    </Provider>), document.getElementById('app'));
