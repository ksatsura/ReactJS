//imports
import React from 'react';
import SearchHeader from '../SearchHeader/SearchHeader';
import FilmHeader from '../FilmHeader/FilmHeader';
import { Route, Switch } from 'react-router-dom';
import '../style.css';

export const Header = () => {

    return (
        <div>
            <Switch>
                <Route path='/film/:id' render={() => <FilmHeader /> } /> 
                <Route path='/' render={ () => <SearchHeader /> } /> 
                <Route path='/search/:value' render={() => <SearchHeader /> } />
            </Switch>
        </div>
    );
};

export default Header;