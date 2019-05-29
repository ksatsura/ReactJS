//imports
import * as React from 'react';
import SearchFilter from '../SearchFilter/SearchFilter';
import { connect } from 'react-redux';
import { saveInputValue } from '../../actions/searchActions';
import injectSheet from 'react-jss';
import '../../style.css';

// @flow
type Props = {
    value: string, 
    handleChange: (string) => void, 
    match: {
        params: {
            value: string
        }
    },
    location: {},
};

const styles = {
    searchArea: {
        display: 'flex',
        flexDirection: 'column',
    },
    searchTitle: {
        color: 'white',
        margin: {
            top: 10,
            right: 60,
            bottom: 10,
            left: 60
        },
        textTransform: 'uppercase',
    },
    searchValue: {
        height: 40,
        width: 1080,
        fontSize: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        margin: {
            top: 10,
            right: 60,
            bottom: 20,
            left: 60
        },
        color: 'white',
        'border-top': [2, 'solid', 'black'],
        'border-right': [2, 'solid', 'black'],
        'border-bottom': [2, 'solid', '#ff0055'],
        'border-left': [2, 'solid', 'black'],
    },
};
  
const SearchAreaDiv = ({ classes, value, handleChange, children }) => (
    <div className={classes.searchArea}>
        <h1 className={classes.searchTitle}>find your movie</h1>
        <input type="search" name="search-value" className={classes.searchValue} value={value} onChange={(e) => handleChange(e.target.value)} />
        { children }
    </div>
);

const StyledSearchAreaDiv = injectSheet(styles)(SearchAreaDiv);

export const SearchArea = (props: Props) => {

    const { value, handleChange, match, location } = props;

    const paramValue = match && match.params.value;

    return (
        <StyledSearchAreaDiv value={value} handleChange={handleChange} >
            <SearchFilter location={location} paramValue={paramValue} />
        </StyledSearchAreaDiv>
    );  
};

const mapDispatchToProps = dispatch => {
    return {
        handleChange: (value) => dispatch(saveInputValue(value)),
    };
};

const mapStateToProps = state => {
    return {
        value: state.filmListReducer.currentValue,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);