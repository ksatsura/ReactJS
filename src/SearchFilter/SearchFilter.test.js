import React from 'react';
import { SearchFilter } from './SearchFilter';
import { shallow } from 'enzyme';

describe('SearchFilter component', () => {

    const props = {
        value: ' ',
        handleSearchBtnClick: jest.fn(),
    };

    describe('should render', () => {

        it('as expected', () => {
            const component = shallow(<SearchFilter {...props} />);

            expect(component).toMatchSnapshot();
        });
    });

    describe('handleChange', () => {

        it('test input change event', () => {
            
            const component = shallow(<SearchFilter {...props} />);

            component.find('input').simulate('click');
            expect(props.handleSearchBtnClick.mock.calls.length).toEqual(1);
        });
    });
});
