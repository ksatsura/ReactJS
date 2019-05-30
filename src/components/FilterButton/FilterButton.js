//imports
import * as React from 'react';
import classNames from 'classnames';
import { connect } from  'react-redux';
import { toggleSearchFilter, toggleSortFilter } from '../../actions/searchActions';
import '../../style.css';

// @flow
type Props = {
    id: string, 
    searchBy: string, 
    sortBy: string, 
    handleFilterClick: (id: string) =>  void, 
    handleSortClick: (id: string) =>  void, 
    name: string,
};

export const FilterButton = (props: Props) => {

    const { id, searchBy, sortBy, handleFilterClick, handleSortClick, name } = props;
    const handleClick = (id === 'title' || id === 'genre') ? handleFilterClick : handleSortClick;
    let styles = (id === 'title' || id === 'genre') 
        ? classNames({ [`search-filter-btn-${id}`]: true }, { focused: (searchBy === id) })
        : classNames('search-results-btn', { selected: (sortBy === id) });

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