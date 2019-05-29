import React from 'react';
import ReleaseDate from './ReleaseDate';
import { shallow } from 'enzyme';

describe('ReleaseDate.js', () => {

    const props = {
        date: '2019-01-01',
    };

    describe('renders', () => {

        it('as expected', () => {
            const component = shallow(<ReleaseDate {...props} />);

            expect(component).toMatchSnapshot();
        });
    });
});
