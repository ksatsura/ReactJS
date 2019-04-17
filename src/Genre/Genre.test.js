import React from 'react';
import Genre from './Genre';
import {shallow} from 'enzyme';

describe('Genre.js', () => {

    const props = {
        genres: [' ', ' '],
    };

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<Genre {...props} />);

            expect(component).toMatchSnapshot();
        });

        it('renders for mobile', () => {
            const component = shallow(<Genre {...props} isMobile />);

            expect(component).toMatchSnapshot();
        });
    });
});