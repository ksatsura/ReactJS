import React from 'react';
import SearchHeader from './SearchHeader';
import SearchArea from '../SearchArea/SearchArea';
import CompanyTitle from '../CompanyTitle/CompanyTitle';
import { shallow } from 'enzyme';

describe('SearchHeader.js', () => {

    describe('should render', () => {

        it('as expected', () => {
            const component = shallow(<SearchHeader />);

            expect(component).toMatchSnapshot();
            expect(component.find(SearchArea).length).toEqual(1);
            expect(component.find(CompanyTitle).length).toEqual(1);
        });
    });
});