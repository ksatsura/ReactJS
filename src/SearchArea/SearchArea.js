//imports
import React, {PureComponent} from 'react';
import SearchFilter from '../SearchFilter/SearchFilter.js';
import '../style.css';

class SearchArea extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className='search-area'>
                <h1 className='search-title'>find your movie</h1>
                <form className='search-form' onSubmit={this.handleSubmit} >
                    <input type="search" name="search-value" className='search-value' value={this.state.value} onChange={this.handleChange} />
                    <br/><br/>
                    <input type="submit" value="Search" className='search-button' onClick={(e) => this.props.handleClick(this.state.value, e)}/>
                </form>
                <SearchFilter />
            </div>
        );
    }
}

export default SearchArea;