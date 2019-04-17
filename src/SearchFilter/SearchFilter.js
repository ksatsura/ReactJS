//imports
import React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import { connect } from 'react-redux';
import { fetchAssetsIfNeeded } from '../actions/searchActions';

export const SearchFilter = (props) => {

    const { value, handleSearchBtnClick } = props;

    return (
        <div className='search-buttons'>
            <div className='search-filter'>
                <p className='search-filter-title'>search by</p>
                <FilterButton id='title' name='title' />
                <FilterButton id='genre' name='genre' />
            </div>
            <input type="submit" value="Search" className='search-button' onClick={() => handleSearchBtnClick(value) }/>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        handleSearchBtnClick: (value) => dispatch(fetchAssetsIfNeeded(value)),
    };
};

const mapStateToProps = state => {
    return {
        value: state.filmListReducer.currentValue,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);