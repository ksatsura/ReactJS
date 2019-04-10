import React from 'react';
import FilmCollection from './FilmCollection.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('FilmCollection component', () => {
    let assets;
    let mockHandleClick;

    beforeAll(() => {
        assets= [{}, {}];
        mockHandleClick= () => {};
    });

    it('should be render correctly', () => {
        const component = shallow(<FilmCollection assets={assets} handleClick={mockHandleClick} />);
        
        expect(component).toMatchSnapshot();
    });

});