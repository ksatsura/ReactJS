import React from 'react';
import { FilmHeader } from './FilmHeader';
import {shallow} from 'enzyme';

describe('FilmHeader.js', () => {

    const props = {
        film: {
            poster_path: 'src/images/wallpaper.jpg',
        },
        handleClick: jest.fn(),
    };

    describe('should renders', () => {

        it('as expected', () => {
            const component = shallow(<FilmHeader {...props} />);

            expect(component).toMatchSnapshot();
        });
    });

    describe('handleClick', () => {

        it('test search button click event', () => {
        
            const component = shallow(<FilmHeader {...props} />);
    
            component.find('button').simulate('click');
            expect(props.handleClick).toHaveBeenCalledTimes(1);
        });

    });
});
