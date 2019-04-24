import React from 'react';
import { Header } from './Header';
import SearchHeader from '../SearchHeader/SearchHeader';
import FilmHeader from '../FilmHeader/FilmHeader';
import { shallow } from 'enzyme';

describe('Header.js', () => {

    const props = {
        isfilmClicked: false,
    };

    describe('should render', () => {

        it('if the film was not clicked', () => {
            const component = shallow(<Header {...props} />);

            expect(component).toMatchSnapshot();
            expect(component.find(SearchHeader).length).toEqual(1);
            expect(component.find(FilmHeader).length).toEqual(0);
        });

        it('after the film was clicked', () => {
            const otherProps = {
                ...props,
                isfilmClicked: true,
            };
            const component = shallow(<Header {...otherProps} />);

            expect(component).toMatchSnapshot();
            expect(component.find(SearchHeader).length).toEqual(0);
            expect(component.find(FilmHeader).length).toEqual(1);
        });
    });
});