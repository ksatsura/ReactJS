//imports
import React from 'react';
import SearchHeader from '../SearchHeader/SearchHeader';
import FilmHeader from '../FilmHeader/FilmHeader';
import '../style.css';

export const Header = (props) => {

    const { isfilmClicked } = props;

    return (
        <div>
            { isfilmClicked ? <FilmHeader /> : <SearchHeader /> }
        </div>
    );
};

export default Header;