//imports
import React from 'react';
import AssetInfo from '../AssetInfo/AssetInfo';
import Poster from '../Poster/Poster';
import { connect } from 'react-redux';
import { backToSearch } from '../actions/assetActions';
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import '../style.css';

export const AssetHeader = (props) => {

    const {asset, handleClick} = props;

    return (
        <div className='asset-info'>
            <div className='top-asset-info'>
                <CompanyTitle />
                <button onClick={handleClick} className='search-navigation'>search</button>
            </div>
            <div className='asset-poster-data'>
                <div className='poster'>
                    <Poster url={asset.poster_path}/>
                </div>
                <AssetInfo asset={asset} />
            </div>
        </div>
    );
};

const mapStateToProps = state => {

    return {
        asset: state.assetReducer.asset,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClick: () => { dispatch(backToSearch()); },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetHeader);