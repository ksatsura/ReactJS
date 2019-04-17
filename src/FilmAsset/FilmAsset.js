//imports
import React from 'react';
import Poster from '../Poster/Poster';
import Info from '../Info/Info';
import { connect } from 'react-redux';
import { fetchPostIfNeeded } from '../actions/assetActions';
import '../style.css';

export const FilmAsset = (props) => {

    const {asset, handleClick} = props;

    return (
        <div id={asset.id} className='film-asset' onClick={(e) => handleClick(e) }>
            <Poster url={asset.poster_path}  />
            <Info asset={asset} />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: (e) => { dispatch(fetchPostIfNeeded(e.currentTarget.id)); },
    };
};

export default connect(null, mapDispatchToProps)(FilmAsset);