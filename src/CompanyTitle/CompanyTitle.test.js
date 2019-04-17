import React from 'react';
import CompanyTitle from './CompanyTitle';
import {shallow} from 'enzyme';

describe('CompanyTitle.js', () => {

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<CompanyTitle />);
            expect(component).toMatchSnapshot();
        });

        it('renders for mobile', () => {
            const component = shallow(<CompanyTitle isMobile />);

            expect(component).toMatchSnapshot();
        });
    });
});
