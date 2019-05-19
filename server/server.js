import Express from 'express';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { initialState } from '../src/initialState';
import renderFullPage from '../src/renderFullPage';
import { Router, Route, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import combinedReducer from '../src/reducers/combinedReducer';
import { Error404 } from '../src/Error404/Error404';
import App from '../src/App';

const history = createMemoryHistory();

const app = Express();
const port = 3000;

//Serve static files
app.use('/dist', Express.static('dist'));

app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
    const store = createStore(
        combinedReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
        ),
    );

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
            <Router history={history} location={req.path}>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/film/:id" component={App} />
                    <Route path="/search/:value" component={App} />
                    <Route path="/" component={Error404} />
                </Switch>
            </Router>
        </Provider>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
}

app.set('port', port);

app.listen(app.get('port'), function() {
    console.log('listening');
});

















