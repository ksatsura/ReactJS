import React from 'react';
import SearchArea from './SearchArea.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('SearchArea component', () => {

    let handleClick;

    beforeAll(() => {
        handleClick = jest.fn();
    });

    it('should be render correctly', () => {
        const component = shallow(<SearchArea handleClick={handleClick} />);
        
        expect(component).toMatchSnapshot();
    });

    it('test search button click event', () => {
        const component = shallow(<SearchArea handleClick={handleClick} />);
        
        component.find('.search-button').simulate('click');
        expect(handleClick.mock.calls.length).toEqual(1);
    });

    it('test submit button click event', () => {
        const fakeEvent = { preventDefault: () => {} };
        const component = shallow(<SearchArea handleClick={handleClick} />);
        component.instance().handleSubmit = jest.fn();
        
        component.find('.search-form').simulate('submit', fakeEvent);
        expect(component.instance().handleSubmit).toHaveBeenCalled;
    });

    it('test search field change event', () => {
        const component = shallow(<SearchArea handleClick={handleClick} />);

        component.instance().handleChange = jest.fn();
        component.update();
        component.instance().handleChange('the-value');
        expect(component.instance().handleChange).toBeCalledWith('the-value');
    });
});
