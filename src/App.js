//imports
import React from 'react';
import Header from './Header/Header.js';
import FilmCollection from './FilmCollection/FilmCollection';
import Footer from './Footer/Footer.js';
import ResultsArea from './ResultsArea/ResultsArea';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { connect } from 'react-redux';
import './style.css';

const App = (props) => {

    const { assets, isAssetClicked, genre, assetsSameGenre } = props;
    const assetsNumber = props.assets.length;

    return (
        <div className='app'>
            <ErrorBoundary>
                <Header isAssetClicked={isAssetClicked} />
            </ErrorBoundary>
            <ErrorBoundary>
                <ResultsArea isAssetClicked={isAssetClicked} genre={genre} assetsNumber={assetsNumber} />
            </ErrorBoundary>
            <ErrorBoundary>
                <FilmCollection assetsNumber={assetsNumber} assets={assets} assetsSameGenre={assetsSameGenre} isAssetClicked={isAssetClicked} />
            </ErrorBoundary>
            <Footer/>
        </div>
    );
};

const mapStateToProps = state => {

    return {
        assets: state.filmListReducer.assets,
        isAssetClicked: state.assetReducer.isAssetClicked,
        genre: state.assetReducer.asset.genres[0],
        assetsSameGenre: state.filmListReducer.assetsSameGenre,
    };
};

export default connect(mapStateToProps)(App);