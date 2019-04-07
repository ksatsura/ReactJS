import React from 'react';
import SearchResults from './SearchResults.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import FilterButton from '../FilterButton/FilterButton.js';

describe('SearchResults component', () => {

    let count;

    beforeAll(() => {
        count='';
    });

    it('should be render correctly', () => {
        const component = shallow(<SearchResults count={count} />);
        
        expect(component).toMatchSnapshot();
    });

    it('test filter rating button click event',() => {
        const component = shallow(<SearchResults  count={count} />);
        component.instance().handleClick = jest.fn();

        component.update();
        component.find('#rating').simulate('click', { target: { id: ''}});
        expect(component.instance().handleClick).toHaveBeenCalled;
    });

    it('test filter release-date button click event',() => {
        const component = shallow(<SearchResults  count={count} />);
        component.instance().handleClick = jest.fn();

        component.update();
        component.find('#release-date').simulate('click', { target: { id: ''}});
        expect(component.instance().handleClick).toHaveBeenCalled;
    });
});
