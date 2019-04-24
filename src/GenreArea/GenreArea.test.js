import React from 'react';
import { GenreArea } from './GenreArea';
import { shallow } from 'enzyme';

describe('GenreArea.js', () => {

    const props = {
        genre: '',
    };

    describe('should render', () => {

        it('as expected', () => {
            const component = shallow(<GenreArea {...props} />);

            expect(component).toMatchSnapshot();
        });
    });
});