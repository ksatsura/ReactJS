import React from 'react';
import { GenreArea } from './GenreArea';
import { shallow } from 'enzyme';

describe('GenreArea.js', () => {

    const props = {
        genre: '',
    };

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<GenreArea {...props} />);

            expect(component).toMatchSnapshot();
        });

        it('renders for mobile', () => {
            const component = shallow(<GenreArea {...props} isMobile />);

            expect(component).toMatchSnapshot();
        });
    });
});