import React from 'react';
import FilmAsset from './FilmAsset.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('FilmAsset component', () => {
    let url;
    let title;
    let releaseDate;
    let genre;
    let key;
    let mockHandleClick;

    beforeAll(() => {
        title= '';
        releaseDate= '';
        genre='';
        key='';
        mockHandleClick=jest.fn();
        url='';
    });

    it('should be render correctly', () => {
        const component = shallow(<FilmAsset key={key} url={url} title={title} genre={genre} releaseDate={releaseDate} handleClick={mockHandleClick} />);
        
        expect(component).toMatchSnapshot();
    });

    it('test film asset click event', () => {
        const component = shallow(<FilmAsset key={key} url={url} title={title} genre={genre} releaseDate={releaseDate} handleClick={mockHandleClick} />);

        component.find('.film-asset').simulate('click');
        expect(mockHandleClick.mock.calls.length).toEqual(1);
    });
});


