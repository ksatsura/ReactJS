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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

const Error404 = () => {
    return <h1>404 Page not found</h1>;
};

ReactDom.render(
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
