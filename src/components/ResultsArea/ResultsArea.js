//imports
import * as React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import GenreArea from '../GenreArea/GenreArea';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import injectSheet from 'react-jss';
import '../../style.css';

const ResultsAreaDiv = styled.div`
    width: 1200px;
    height: 60px;
    margin: auto;
    background-color: #e6e6e6;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const styles = {
    resultsFilter: {
        display: 'flex',
        width: 250,
        height: 20,
        alignItems: 'baseline',
        justifyContent: 'space-around',
    },
    resultsFilterTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    }
};
  
const ResultsFilter = ({ classes, children }) => (
    <div className={classes.resultsFilter}>
        <p className={classes.resultsFilterTitle}>Sort by</p>
        { children }
    </div>
);

const StyledResultsFilter = injectSheet(styles)(ResultsFilter);

// @flow
type Props = {
    filmsNumber: number, 
    genre: string,
};

const ResultsArea = (props: Props) => {

    const { filmsNumber, genre} = props;
    let content = (filmsNumber === 0) && <div className='results-area' id='no-films' ></div>;

    if (content) {
        return content;
    } else if (genre) {
        content = (
            <ResultsAreaDiv>
                <GenreArea genre={genre} />
                <div></div>
            </ResultsAreaDiv>
        );
    } else {
        content = (<ResultsAreaDiv>
            <p className='results-title'>{filmsNumber + ' movies found'}</p>
            <StyledResultsFilter>
                <FilterButton id='release_date' name='release date' />
                <FilterButton id='vote_average' name='rating' />
            </StyledResultsFilter>
        </ResultsAreaDiv>);
    }

    return content;
};

export default ResultsArea;