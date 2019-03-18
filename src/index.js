//imports
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

ReactDom.render(<App />, document.getElementById('app'));


