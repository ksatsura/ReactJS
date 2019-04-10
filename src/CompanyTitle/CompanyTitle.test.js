import React from 'react';
import CompanyTitle from './CompanyTitle.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('CompanyTitle component', () => {

    it('should be render correctly', () => {
        const component = shallow(<CompanyTitle />);
        
        expect(component).toMatchSnapshot();
    });
});
