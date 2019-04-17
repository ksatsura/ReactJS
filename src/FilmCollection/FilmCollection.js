//imports
import React from 'react';
import FilmAsset from '../FilmAsset/FilmAsset';
import '../style.css';
//constants
const key = 'qwert1';

const FilmCollection = (props) => {

    const { assets, assetsNumber, assetsSameGenre, isAssetClicked } = props;

    const films = isAssetClicked ? assetsSameGenre : assets;

    const collection = ( <ul className='film-collection' >
        { films.map((film, i) => <FilmAsset key={key+i} asset={film} />) }
    </ul>);

    return (
        <div className='films-container'>
            { assetsNumber > 0 ? collection : <p className='no-films'>No films found</p> }
        </div>
    );   
};

export default FilmCollection;