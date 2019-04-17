import React from 'react';
import FilmCollection from './FilmCollection';
import {shallow} from 'enzyme';

describe('FilmCollection.js', () => {
    const props = {
        assets: [{}, {}],
        assetsNumber: 1,
        assetsSameGenre: [{}, {}],
        isAssetClicked: false,
    };

    describe('renders', () => {

        it('renders search collection for desktop', () => {
            const component = shallow(<FilmCollection {...props} />);

            expect(component).toMatchSnapshot();
        });

        it('renders search collection for mobile', () => {
            const component = shallow(<FilmCollection {...props} isMobile />);

            expect(component).toMatchSnapshot();
        });

        it('renders genre collection for desktop', () => {
            const otherProps = {
                ...props,
                isAssetClicked: true,
            };
            const component = shallow(<FilmCollection {...otherProps} />);

            expect(component).toMatchSnapshot();
        });

        it('renders genre collection for mobile', () => {
            const otherProps = {
                ...props,
                isAssetClicked: true,
            };
            const component = shallow(<FilmCollection {...otherProps} isMobile />);

            expect(component).toMatchSnapshot();
        });

        it('renders no collection for desktop', () => {
            const otherProps = {
                ...props,
                assetsNumber: 0,
            };
            const component = shallow(<FilmCollection {...otherProps} />);

            expect(component).toMatchSnapshot();
        });

        it('renders no collection for mobile', () => {
            const otherProps = {
                ...props,
                assetsNumber: 0,
            };
            const component = shallow(<FilmCollection {...otherProps} isMobile />);

            expect(component).toMatchSnapshot();
        });
    });
});