//imports
import React from 'react';
import SearchHeader from '../SearchHeader/SearchHeader';
import AssetHeader from '../AssetHeader/AssetHeader';
import '../style.css';

export const Header = (props) => {

    const { isAssetClicked } = props;

    return (
        <div>
            { isAssetClicked ? <AssetHeader /> : <SearchHeader /> }
        </div>
    );
};

export default Header;