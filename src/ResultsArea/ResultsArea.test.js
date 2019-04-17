import React from 'react';
import ResultsArea from './ResultsArea';
import GenreArea from '../GenreArea/GenreArea';
import { shallow } from 'enzyme';

describe('ResultsArea.js', () => {

    const props = {
        assetsNumber: 1, 
        isAssetClicked: false, 
        genre: '',
    };

    describe('renders', () => {

        it('renders for desktop if the asset was not clicked', () => {
            const component = shallow(<ResultsArea {...props} />);

            expect(component).toMatchSnapshot();
            expect(component.find(GenreArea).length).toEqual(0);
        });

        it('renders for mobile if the asset was not clicked', () => {
            const component = shallow(<ResultsArea {...props} isMobile />);

            expect(component).toMatchSnapshot();
            expect(component.find(GenreArea).length).toEqual(0);
        });

        it('renders for desktop when the asset was clicked', () => { 
            const otherProps = {
                ...props,
                isAssetClicked: true,
            };
            const component = shallow(<ResultsArea {...otherProps} />);

            expect(component).toMatchSnapshot();
            expect(component.find(GenreArea).length).toEqual(1);
        });

        it('renders for mobile  when the asset was clicked', () => {
            const otherProps = {
                ...props,
                isAssetClicked: true,
            };
            const component = shallow(<ResultsArea {...otherProps} isMobile />);

            expect(component).toMatchSnapshot();
            expect(component.find(GenreArea).length).toEqual(1);
        });

        it('renders for desktop when no assets number', () => {
            const otherProps = {
                ...props,
                assetsNumber: 0,
            };
            const component = shallow(<ResultsArea {...otherProps} />);

            expect(component).toMatchSnapshot();
            expect(component.find('#no-films').length).toEqual(1);
        });

        it('renders for mobile when no assets number', () => {
            const otherProps = {
                ...props,
                assetsNumber: 0,
            };
            const component = shallow(<ResultsArea {...otherProps} isMobile />);

            expect(component).toMatchSnapshot();
            expect(component.find('#no-films').length).toEqual(1);
        });
    });
});
