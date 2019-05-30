import React from 'react';
import Genre from './Genre';
import {shallow} from 'enzyme';

describe('Genre.js', () => {

    const props = {
        genres: ['Comedy', 'Triller'],
    };

    describe('should render', () => {

        it('as expected', () => {
            const component = shallow(<Genre {...props} />);

            expect(component).toMatchSnapshot();
        });
    });
});