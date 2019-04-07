import React from 'react';
import AssetData from './AssetData.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

describe('AssetData component', () => {

    let title;
    let releaseDate;
    let genre;
    let nomination;
    let description;
    let duration;
    let rating;

    beforeAll(() => {
        title= '';
        releaseDate= '';
        genre='';
        nomination= '';
        description= '';
        duration= '';
        rating= '';
    });

    it('should be render correctly', () => {
        const component = shallow(<AssetData title={title} releaseDate={releaseDate} genre={genre} nomination={nomination} description={description} duration={duration} rating={rating} />);
        expect(component).toMatchSnapshot();
    });

});
