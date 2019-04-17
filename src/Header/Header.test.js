import React from 'react';
import { Header } from './Header';
import SearchHeader from '../SearchHeader/SearchHeader';
import AssetHeader from '../AssetHeader/AssetHeader';
import { shallow } from 'enzyme';

describe('Header.js', () => {

    const props = {
        isAssetClicked: false,
    };

    describe('renders', () => {

        it('renders for desktop if the asset was not clicked', () => {
            const component = shallow(<Header {...props} />);

            expect(component).toMatchSnapshot();
            expect(component.find(SearchHeader).length).toEqual(1);
            expect(component.find(AssetHeader).length).toEqual(0);
        });

        it('renders for mobile if the asset was not clicked', () => {
            const component = shallow(<Header {...props} isMobile />);

            expect(component).toMatchSnapshot();
            expect(component.find(SearchHeader).length).toEqual(1);
            expect(component.find(AssetHeader).length).toEqual(0);
        });

        it('renders for desktop after the asset was clicked', () => {
            const otherProps = {
                ...props,
                isAssetClicked: true,
            };
            const component = shallow(<Header {...otherProps} />);

            expect(component).toMatchSnapshot();
            expect(component.find(SearchHeader).length).toEqual(0);
            expect(component.find(AssetHeader).length).toEqual(1);
        });

        it('renders for mobile after the asset was clicked', () => {
            const otherProps = {
                ...props,
                isAssetClicked: true,
            };
            const component = shallow(<Header {...otherProps} isMobile />);

            expect(component).toMatchSnapshot();
            expect(component.find(SearchHeader).length).toEqual(0);
            expect(component.find(AssetHeader).length).toEqual(1);
        });
    });
});