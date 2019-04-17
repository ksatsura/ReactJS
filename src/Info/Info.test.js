import React from 'react';
import { Info } from './Info.js';
import { shallow } from 'enzyme';

describe('Info.js', () => {

    const props = {
        asset: {
            genres: [' ', ' '],
            release_date: ' ',
            title: '',
        }
    };

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<Info {...props} />);

            expect(component).toMatchSnapshot();
        });

        it('renders for mobile', () => {
            const component = shallow(<Info {...props} isMobile />);

            expect(component).toMatchSnapshot();
        });
    });
});
