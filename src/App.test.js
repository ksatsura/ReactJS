import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';

describe('App.js', () => {

    const props = {
        assets: [{}, {}], 
        isAssetClicked: false, 
        genre: ' ', 
        assetsSameGenre: [{}, {}]
    };

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<App {...props} />);

            expect(component).toMatchSnapshot();
        });

        it('renders for mobile', () => {
            const component = shallow(<App {...props} isMobile />);

            expect(component).toMatchSnapshot();
        });
    });

});
