import React from 'react';
import App from './App.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';
// import Header from './Header/Header.js';
// import FilmCollection from './FilmCollection/FilmCollection.js';
// import Footer from './Footer/Footer.js';
// import SearchResults from './SearchResults/SearchResults.js';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary.js';
import AssetInfo from './AssetInfo/AssetInfo.js';
// import GenreArea from './GenreArea/GenreArea.js';

describe('App component', () => {

    let newAssets=[];

    beforeAll(() => {
        let asset = {};
        asset.imgUrl='';
        asset.title='';
        asset.releaseDate='';
        asset.genre='';
        newAssets.push(asset);
    });

    it('should be render correctly', () => {
        const component = shallow(<App />);
        
        expect(component).toMatchSnapshot();
    });

    it('test search button click event',() => {
        const component = mount(<App />);
        component.instance().handleClick = jest.fn();
        component.setState({count: 3});

        component.update();
        component.find('.search-button').simulate('click');
        expect(component.instance().handleClick).toHaveBeenCalled;
        expect(component.find('#no-results').exists()).toBe(false);
    });

    it('test film asset click event',() => {
        const component = mount(<App />);
        component.instance().handleAssetClick = jest.fn();
        component.setState({assets: newAssets});

        component.update();
        component.find('.film-asset').simulate('click', { });
        expect(component.instance().handleAssetClick).toHaveBeenCalled;
    });


});
