import React from 'react';
import Footer from './Footer';
import {shallow} from 'enzyme';

describe('Footer.js', () => {

    describe('should render', () => {

        it('as expected', () => {
            const component = shallow(<Footer />);

            expect(component).toMatchSnapshot();
        });
    });
});