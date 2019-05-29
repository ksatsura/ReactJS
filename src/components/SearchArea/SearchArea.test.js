import React from 'react';
import { SearchArea } from './SearchArea';
import { shallow } from 'enzyme';

describe('SearchArea component', () => {

    const props = {
        value: ' ',
        handleChange: jest.fn(),
    };

    describe('SearchArea.js', () => {

        describe('should render', () => {
    
            it('as expected', () => {
                const component = shallow(<SearchArea {...props} />);
    
                expect(component).toMatchSnapshot();
            });
        });

        describe('handleChange', () => {
    
            it('test input change event', () => {
                
                const component = shallow(<SearchArea {...props} />);
    
                component.find('input').simulate('change', { target: { id: ' '}});
                expect(props.handleChange.mock.calls.length).toEqual(1);
            });
        });
    });
});
