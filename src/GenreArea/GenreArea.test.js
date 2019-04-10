import React from 'react';
import GenreArea from './GenreArea.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('GenreArea component', () => {

    let genre;

    beforeAll(() => {
        genre= '';
    });

    it('should be render correctly', () => {
        const component = shallow(<GenreArea genre={genre} />);
        
        expect(component).toMatchSnapshot();
    });
});