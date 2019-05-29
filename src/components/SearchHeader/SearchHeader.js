//imports
import React from 'react';
import SearchArea from '../SearchArea/SearchArea';
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import '../../style.css';

const SearchHeader = (props) => {

    const { location, match } = props;

    return (
        <div className='header'>
            <CompanyTitle />
            <SearchArea location={location} match={match}/>
        </div>
    );
};

export default SearchHeader;