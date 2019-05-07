//imports
import React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import GenreArea from '../GenreArea/GenreArea';
import { Switch, Route } from 'react-router-dom';
import '../style.css';

const ResultsArea = (props) => {

    const { filmsNumber, genre} = props;
    const content = !filmsNumber && <div className='results-area' id='no-films' ></div>;

    if (content) {
        return content;
    }

    return (
        <div className='results-area'>
            <Switch>
                <Route path='/film/:id' render={() => <GenreArea genre={genre} />} />
                <Route path='/' render={() => <p className='results-title'>{filmsNumber + ' movies found'}</p>} />
            </Switch>
            <Switch>
                <Route path='/film/:id' render={() => <div></div>} /> 
                <Route path='/' render ={() => (<div className='results-filter'> 
                    <p className='results-filter-title'>Sort by</p>
                    <FilterButton id='release_date' name='release date' />
                    <FilterButton id='vote_average' name='rating' />
                </div>)} />
            </Switch>
        </div>
        
    );
};

export default ResultsArea;