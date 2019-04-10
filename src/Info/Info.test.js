import React from 'react';
import Info from './Info.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('Info component', () => {

    let genre;
    let title;
    let releaseDate;

    beforeAll(() => {
        genre= '';
        title='';
        releaseDate='';
        jest.mock('../FilmName/FilmName.js', () => 'filmName');
        jest.mock('../Genre/Genre.js', () => 'genre');
        jest.mock('../ReleaseDate/ReleaseDate.js', () => 'releaseDate');
    });

    it('should be render correctly', () => {
        const component = shallow(<Info title={title} releaseDate={releaseDate} genre={genre} />);
        
        expect(component).toMatchSnapshot();
    });
});
