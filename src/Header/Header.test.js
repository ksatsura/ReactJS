import React from 'react';
import Header from './Header.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('Header component', () => {

    beforeAll(() => {
        jest.mock('../SearchArea/SearchArea.js', () => 'searchArea');
        jest.mock('../CompanyTitle/CompanyTitle.js', () => 'companyTitle');
    });

    it('should be render correctly', () => {
        const component = shallow(<Header />);
        
        expect(component).toMatchSnapshot();
    });
});