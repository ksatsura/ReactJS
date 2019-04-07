import React from 'react';
import ReleaseDate from './ReleaseDate.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('ReleaseDate component', () => {

    let date;

    beforeAll(() => {
        date='';
    });

    it('should be render correctly', () => {
        const component = shallow(<ReleaseDate  date={date} />);
        
        expect(component).toMatchSnapshot();
    });
});
