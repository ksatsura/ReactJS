import React from 'react';
import Poster from './Poster';
import { shallow } from 'enzyme';

describe('Poster.js', () => {

    const props = {
        url: 'src/images/wallpaper3.jpg',
    };

    describe('should render', () => {

        it('as expected', () => {
            const component = shallow(<Poster {...props} />);

            expect(component).toMatchSnapshot();
        });
    });
});
