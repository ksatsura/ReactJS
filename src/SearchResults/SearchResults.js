//imports
import React, { Component } from 'react';
import FilterButton from '../FilterButton/FilterButton.js';
import '../style.css';

class SearchResults extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selected: 'rating',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({selected: event.target.id});
    }

    render() {
        return (
            <div className='search-results'>
                <p className='results-title'>{this.props.count + ' movies found'}</p>
                <div className='results-filter'> 
                    <p className='results-filter-title'>Sort by</p>
                    <FilterButton id='release date' styles={ this.state.selected === 'release date' ? 'search-results-btn selected' : 'search-results-btn'} handleClick={this.handleClick} />
                    <FilterButton id='rating' styles={ this.state.selected === 'rating' ? 'search-results-btn selected' : 'search-results-btn'} handleClick={this.handleClick} />
                </div>
            </div>
    
        );
    }
}

export default SearchResults;