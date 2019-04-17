import React from 'react';
import Footer from './Footer';
import {shallow} from 'enzyme';

describe('Footer.js', () => {

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<Footer />);

            expect(component).toMatchSnapshot();
        });

        it('renders for mobile', () => {
            const component = shallow(<Footer isMobile />);

            expect(component).toMatchSnapshot();
        });
    });
});