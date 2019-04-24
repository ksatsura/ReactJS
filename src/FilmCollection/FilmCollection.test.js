import React from 'react';
import FilmCollection from './FilmCollection';
import {shallow} from 'enzyme';

describe('FilmCollection.js', () => {
    const props = {
        films: [{}, {}],
        filmsNumber: 1,
        filmsSameGenre: [{}, {}],
        isfilmClicked: false,
    };

    describe('renders', () => {

        it('renders search collection for desktop', () => {
            const component = shallow(<FilmCollection {...props} />);

            expect(component).toMatchSnapshot();
        });

        it('renders genre collection for desktop', () => {
            const otherProps = {
                ...props,
                isfilmClicked: true,
            };
            const component = shallow(<FilmCollection {...otherProps} />);

            expect(component).toMatchSnapshot();
        });

        it('renders no collection for desktop', () => {
            const otherProps = {
                ...props,
                filmsNumber: 0,
            };
            const component = shallow(<FilmCollection {...otherProps} />);

            expect(component).toMatchSnapshot();
        });

        it('renders no collection for mobile', () => {
            const otherProps = {
                ...props,
                filmsNumber: 0,
            };
            const component = shallow(<FilmCollection {...otherProps} isMobile />);

            expect(component).toMatchSnapshot();
        });
    });
});