//imports
import React, { Component } from 'react';
import FilterButton from '../FilterButton/FilterButton.js';

class SearchFilter extends Component {

    constructor (props) {
        super(props);
        this.state = {
            focused: 'title',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({focused: event.target.id});
    }
    
    
    render () {
        return (
            <div className='search-filter'>
                <p className='search-filter-title'>search by</p>
                <FilterButton id='title' styles={ this.state.focused === 'title' ? 'search-filter-btn-title focused' : 'search-filter-btn-title'} onClick={this.handleClick}/>
                <FilterButton id='genre' styles={ this.state.focused === 'genre' ? 'search-filter-btn-genre focused' : 'search-filter-btn-genre'} onClick={this.handleClick}/>
            </div>
        );
    }
}

export default SearchFilter;