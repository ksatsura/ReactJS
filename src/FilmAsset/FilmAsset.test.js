import React from 'react';
import  { FilmAsset } from './FilmAsset';
import Poster from '../Poster/Poster';
import Info from '../Info/Info';
import { shallow } from 'enzyme';

describe('FilmAsset.js', () => {
    
    const props = {
        film: {
            poster_path: 'src/images/wallpaper3.jpg',
        },
        handleClick: jest.fn(),
    };

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<FilmAsset {...props} />);

            expect(component).toMatchSnapshot();
            expect(component.find(Info).length).toEqual(1);
            expect(component.find(Poster).length).toEqual(1);
        });
    });

    it('test film film click event', () => {
        const component = shallow(<FilmAsset {...props} />);

        component.find('.film-asset').simulate('click');
        expect(props.handleClick.mock.calls.length).toEqual(1);
    });
});


