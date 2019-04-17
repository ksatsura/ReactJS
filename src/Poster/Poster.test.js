import React from 'react';
import Poster from './Poster';
import { shallow } from 'enzyme';

describe('Poster.js', () => {

    const props = {
        url: '',
    };

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<Poster {...props} />);

            expect(component).toMatchSnapshot();
        });

        it('renders for mobile', () => {
            const component = shallow(<Poster {...props} isMobile />);

            expect(component).toMatchSnapshot();
        });
    });
});
