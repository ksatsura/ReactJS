//imports
import React from 'react';
import SearchArea from '../SearchArea/SearchArea';
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import { Route, Switch } from 'react-router-dom';
import '../style.css';

const SearchHeader = () => {

    return (
        <div className='header'>
            <Route path='/' component={ CompanyTitle } />
            <Switch>
                <Route exact path='/' render={() =>  <SearchArea /> } />
                <Route path='/search/Search :value' render={props =>  <SearchArea  location={props.location} match={props.match} /> } />
            </Switch>
        </div>
    );
};

export default SearchHeader;