import path from 'path';
import Express from 'express';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import combinedReducer from '../src/reducers/combinedReducer';
import { renderToString } from 'react-dom/server';
import { initialState } from '../src/initialState';
import renderFullPage from '../src/renderFullPage';
import App from '../src/App';

const app = Express();
const port = 3000;

const staticPath = path.join(__dirname, '../dist/');
app.use(Express.static(staticPath));

// //Serve static files
// app.use('/static', Express.static('static'))

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
            <App />
        </Provider>
    );

    // Grab the initial state from our Redux store
    const preloadedState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
}

// renderFullPage(html, preloadedState);

app.set('port', port);

app.listen(app.get('port'), function() {
    console.log('listening');
});

















