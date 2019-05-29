import React from 'react';
import ResultsArea from './ResultsArea';
import GenreArea from '../GenreArea/GenreArea';
import { shallow } from 'enzyme';

describe('ResultsArea.js', () => {

    const props = {
        filmsNumber: 1, 
        isFilmClicked: false, 
        genre: '',
    };

    describe('renders', () => {

        it('if the film was not clicked', () => {
            const component = shallow(<ResultsArea {...props} />);

            expect(component).toMatchSnapshot();
            expect(component.find(GenreArea).length).toEqual(0);
        });

        it('when the film was clicked', () => { 
            const otherProps = {
                ...props,
                isFilmClicked: true,
            };
            const component = shallow(<ResultsArea {...otherProps} />);

            expect(component).toMatchSnapshot();
            expect(component.find(GenreArea).length).toEqual(1);
        });

        it('when no films number', () => {
            const otherProps = {
                ...props,
                filmsNumber: 0,
            };
            const component = shallow(<ResultsArea {...otherProps} />);

            expect(component).toMatchSnapshot();
            expect(component.find('#no-films').length).toEqual(1);
        });
    });
});
