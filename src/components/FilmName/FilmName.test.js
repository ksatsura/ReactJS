import React from 'react';
import FilmName from './FilmName';
import {shallow} from 'enzyme';

describe('FilmName.js', () => {

    const props = {
        title: '',
    };

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<FilmName {...props} />);

            expect(component).toMatchSnapshot();
        });
    });
});