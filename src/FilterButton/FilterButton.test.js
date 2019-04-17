import React from 'react';
import { FilterButton } from './FilterButton';
import { shallow } from 'enzyme';

describe('FilterButton.js', () => {

    const props = {
        id: 'title', 
        searchBy: 'genre', 
        sortBy: 'release_date',
        handleFilterClick: jest.fn(), 
        handleSortClick: jest.fn(), 
        name: '',
    };

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<FilterButton {...props} />);

            expect(component).toMatchSnapshot();
        });

        it('renders for mobile', () => {
            const component = shallow(<FilterButton {...props} isMobile />);

            expect(component).toMatchSnapshot();
        });
    });

    describe('handleFilterClick', () => {

        it('test filter button click event', () => {
            
            const component = shallow(<FilterButton {...props} />);

            component.find('button').simulate('click', { target: { id: ' '}});
            expect(props.handleFilterClick.mock.calls.length).toEqual(1);
        });
    });

    describe('handleSortClick', () => {

        const otherProps = {
            ...props,
            id: 'vote_average',
        };

        it('test sort button click event', () => {
            
            const component = shallow(<FilterButton {...otherProps} />);

            component.find('button').simulate('click', { target: { id: ' '}});
            expect(props.handleSortClick.mock.calls.length).toEqual(1);
        });
    });
});