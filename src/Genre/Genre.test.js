import React from 'react';
import Genre from './Genre.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('Genre component', () => {

    let genre;

    beforeAll(() => {
        genre= '';
    });

    it('should be render correctly', () => {
        const component = shallow(<Genre genre={genre} />);
        
        expect(component).toMatchSnapshot();
    });
});