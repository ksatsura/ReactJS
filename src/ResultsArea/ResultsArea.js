//imports
import React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import GenreArea from '../GenreArea/GenreArea';
import '../style.css';

const ResultsArea = (props) => {

    const { assetsNumber, isAssetClicked, genre} = props;
    const content = !assetsNumber && <div className='results-area' id='no-films' ></div>;

    if (content) {
        return content;
    }

    return (
        <div className='results-area'>
            { isAssetClicked ? <GenreArea genre={genre} /> : <p className='results-title'>{assetsNumber + ' movies found'}</p> }
            { isAssetClicked ? <div></div> : (<div className='results-filter'> 
                <p className='results-filter-title'>Sort by</p>
                <FilterButton id='release_date' name='release date' />
                <FilterButton id='vote_average' name='rating' />
            </div>)}
        </div>
        
    );
};

export default ResultsArea;