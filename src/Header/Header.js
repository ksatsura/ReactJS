//imports
import React from 'react';
import SearchHeader from '../SearchHeader/SearchHeader';
import FilmHeader from '../FilmHeader/FilmHeader';
import '../style.css';

export const Header = (props) => {

    const { isFilmClicked } = props;

    return (
        <div>
            { isFilmClicked ? <FilmHeader /> : <SearchHeader /> }
        </div>
    );
};

export default Header;