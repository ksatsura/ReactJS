import React from 'react';
import FilterButton from './FilterButton.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('FilterButton component', () => {

    let styles;
    let handleClick;

    beforeAll(() => {
        styles='';
        handleClick=jest.fn();
    });

    it('should be render correctly', () => {
        const component = shallow(<FilterButton styles={styles} onClick={handleClick} />);
        
        expect(component).toMatchSnapshot();
    });

    it('test filter button click event', () => {
        
        const component = shallow(<FilterButton styles={styles} onClick={handleClick}/>);

        component.find('button').simulate('click');
        expect(handleClick.mock.calls.length).toEqual(1);
    });
});