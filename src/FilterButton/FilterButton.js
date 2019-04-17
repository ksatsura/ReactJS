//imports
import React from 'react';
import { connect } from  'react-redux';
import { toggleSearchFilter, toggleSortFilter } from '../actions/searchActions';
import '../style.css';

export const FilterButton = (props) => {

    const { id, searchBy, sortBy, handleFilterClick, handleSortClick, name } = props;
    const handleClick = (id === 'title' || id === 'genre') ? handleFilterClick : handleSortClick;
    let styles;

    switch(id) {
    case 'title':
        styles = searchBy === 'title' ? 'search-filter-btn-title focused' : 'search-filter-btn-title';
        break;
    case 'genre':
        styles = searchBy === 'genre' ? 'search-filter-btn-genre focused' : 'search-filter-btn-genre';
        break;
    case 'release_date':
        styles = sortBy === 'release_date' ? 'search-results-btn selected' : 'search-results-btn';
        break;
    case 'vote_average':
        styles = sortBy === 'vote_average' ? 'search-results-btn selected' : 'search-results-btn';
    }

    return (
        <button id={id} className={styles} onClick={(e) => handleClick(e.target.id) }>{name}</button>
    );
};

const mapStateToProps = state => {
    return {
        searchBy: state.filmListReducer.searchBy,
        sortBy: state.filmListReducer.sortBy,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleFilterClick: (id) => dispatch(toggleSearchFilter(id)),
        handleSortClick: (id) => dispatch(toggleSortFilter(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);