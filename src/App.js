//imports
import React, { Component } from 'react';
import Header from './Header/Header.js';
import FilmCollection from './FilmCollection/FilmCollection.js';
import Footer from './Footer/Footer.js';
import SearchResults from './SearchResults/SearchResults.js';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';
import AssetInfo from './AssetInfo/AssetInfo.js';
import GenreArea from './GenreArea/GenreArea.js';
import './style.css';
import mockPoster from './images/default.png';
//constants
const mockAsset = {
    title: 'The Mask',
    releaseDate: '1994',
    genre: 'comedy',
    nomination: 'Nominated for the Academy Award for Best Visual Effects',
    description: 'The film stars Jim Carrey, Peter Greene, Amy Yasbeck, Peter Riegert, Richard Jeni, Ben Stein, Joely Fisher, and Cameron Diaz in her film debut. It revolves around Stanley Ipkiss (Carrey), an unfortunate bank clerk who finds a magical mask that transforms him into a mischievous zoot-suited gangster.',
    duration: '101 min',
    rating: '6.4',
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { count:0,
            assets: [],
            isAssetClicked: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleAssetClick = this.handleAssetClick.bind(this);
        this.handleBackToSearch = this.handleBackToSearch.bind(this);
    }

    handleClick(value) {
        this.setState({ count: Number(value) });

        // TO DO remove code below and make the list of assets from API
        const newAssets = [];
        for (let i=0; i <= Number(value) - 1; i++) {
            const asset = {};
            asset.imgUrl=mockPoster;
            asset.title='The Mask';
            asset.releaseDate='1994';
            asset.genre='comedy';
            newAssets.push(asset);
        }

        this.setState({ assets: newAssets });
    }

    handleAssetClick() {

        //TO DO show the clicked asset with corresponding information
        this.setState({ isAssetClicked: true });
    }

    handleBackToSearch() {
        this.setState({ isAssetClicked: false });
    }

    render() {
        const topElement = this.state.isAssetClicked ? <AssetInfo posterUrl={mockPoster} handleBack={this.handleBackToSearch} asset={mockAsset} /> : <Header handleClick={this.handleClick} />;
        const filmCollection = this.state.isAssetClicked ? <FilmCollection assets={this.state.assets.slice(1,2)} handleClick={this.handleAssetClick} /> : <FilmCollection assets={this.state.assets} handleClick={this.handleAssetClick} />;
        const resultArea = this.state.isAssetClicked ? <GenreArea genre={mockAsset.genre} /> : <SearchResults count={this.state.count} />;

        return (
            <div className='app'>
                <ErrorBoundary>
                    {topElement}
                </ErrorBoundary>
                <ErrorBoundary>
                    {this.state.count > 0 ? resultArea : <div id='no-assets' className='search-results'></div>}
                </ErrorBoundary>
                <ErrorBoundary>
                    <div className='films-container'>
                        {this.state.assets.length > 0 ? filmCollection : <p className='no-films'>No films found</p> }
                    </div>
                </ErrorBoundary>
                <Footer/>
            </div>
        );
    }
}

export default App;