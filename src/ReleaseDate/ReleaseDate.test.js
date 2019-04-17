import React from 'react';
import ReleaseDate from './ReleaseDate';
import { shallow } from 'enzyme';

describe('ReleaseDate.js', () => {

    const props = {
        date: '',
    };

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<ReleaseDate {...props} />);

            expect(component).toMatchSnapshot();
        });

        it('renders for mobile', () => {
            const component = shallow(<ReleaseDate {...props} isMobile />);

            expect(component).toMatchSnapshot();
        });
    });
});
