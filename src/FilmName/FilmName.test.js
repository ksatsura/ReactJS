import React from 'react';
import FilmName from './FilmName.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('FilmName component', () => {

    let title;

    beforeAll(() => {
        title= '';
    });

    it('should be render correctly', () => {
        const component = shallow(<FilmName title={title} />);
        
        expect(component).toMatchSnapshot();
    });
});