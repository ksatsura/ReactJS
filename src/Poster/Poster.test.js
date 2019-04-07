import React from 'react';
import Poster from './Poster.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('Poster component', () => {

    let url;

    beforeAll(() => {
        url='../images/default.png';
    });

    it('should be render correctly', () => {
        const component = shallow(<Poster  url={url} />);
        
        expect(component).toMatchSnapshot();
    });
});
