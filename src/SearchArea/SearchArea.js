//imports
import React from 'react';
import SearchFilter from '../SearchFilter/SearchFilter';
import { connect } from 'react-redux';
import { saveInputValue } from '../actions/searchActions';
import '../style.css';

export const SearchArea = (props) => {

    const { value, handleChange, match, location } = props;

    const paramValue = match && match.params.value;

    return (
        <div className='search-area'>
            <h1 className='search-title'>find your movie</h1>
            <input type="search" name="search-value" className='search-value' value={value} onChange={(e) => handleChange(e.target.value)} />
            <SearchFilter location={location} paramValue={paramValue} />
        </div>
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