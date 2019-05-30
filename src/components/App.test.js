import React from 'react';
import App from './App.js';
import { shallow } from 'enzyme';

describe('App.js', () => {

    const props = {
        films: [{}, {}], 
        isFilmClicked: false, 
        genre: ' ', 
        filmsSameGenre: [{}, {}]
    };

    describe('should render', () => {

        it('as expected', () => {
            const component = shallow(<App {...props} />);

            expect(component).toMatchSnapshot();
        });
    });
});
