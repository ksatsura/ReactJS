//imports
import React from 'react';
import SearchArea from '../SearchArea/SearchArea';
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import '../style.css';

const SearchHeader = () => {

    return (
        <div className='header'>
            <CompanyTitle />
            <SearchArea />
        </div>
    );
};

export default SearchHeader;