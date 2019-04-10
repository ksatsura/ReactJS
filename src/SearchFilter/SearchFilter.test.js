import React from 'react';
import SearchFilter from './SearchFilter.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount} from 'enzyme';
import FilterButton from '../FilterButton/FilterButton.js';

describe('SearchFilter component', () => {

    it('should be render correctly', () => {
        const component = shallow(<SearchFilter />);
        
        expect(component).toMatchSnapshot();
    });

    it('test filter title button click event',() => {
        const component = shallow(<SearchFilter />);
        component.instance().handleClick = jest.fn();

        component.update();
        component.find('#title').simulate('click', { target: { id: ''}});
        expect(component.instance().handleClick).toHaveBeenCalled;
    });

    it('test filter genre button click event',() => {
        const component = shallow(<SearchFilter />);
        component.instance().handleClick = jest.fn();

        component.update();
        component.find('#genre').simulate('click', { target: { id: ''}});
        expect(component.instance().handleClick).toHaveBeenCalled;
    });

});
