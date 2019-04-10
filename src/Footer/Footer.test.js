import React from 'react';
import Footer from './Footer.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('Footer component', () => {

    beforeAll(() => {
        jest.mock('../CompanyTitle/CompanyTitle.js', () => 'companyTitle');
    });

    it('should be render correctly', () => {
        const component = shallow(<Footer />);
        
        expect(component).toMatchSnapshot();
    });
});