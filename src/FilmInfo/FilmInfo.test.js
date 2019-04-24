import React from 'react';
import FilmInfo from './FilmInfo';
import {shallow} from 'enzyme';

describe('FilmInfo.js', () => {

    const props = {
        film: {
            title: 'title',
            release_date: '2019-01-01',
            genre: 'genre',
            vote_average: '6',
            tagline: 'Lorum ipsum',
            runtime: '145',
            overview: 'Lorum ipsum',
        },
    };

    describe('should renreds', () => {

        it('as expected', () => {
            const component = shallow(<FilmInfo {...props} />);
            expect(component).toMatchSnapshot();
        });
    });
});
