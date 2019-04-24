import React from 'react';
import { Info } from './Info.js';
import { shallow } from 'enzyme';

describe('Info.js', () => {

    const props = {
        film: {
            genres: [' ', ' '],
            release_date: ' ',
            title: '',
        }
    };

    describe('should render', () => {

        it('as expected', () => {
            const component = shallow(<Info {...props} />);

            expect(component).toMatchSnapshot();
        });
    });
});
