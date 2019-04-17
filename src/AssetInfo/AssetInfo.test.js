import React from 'react';
import AssetInfo from './AssetInfo';
import {shallow} from 'enzyme';

describe('AssetInfo.js', () => {

    const props = {
        asset: {
            title: '',
            release_date: '',
            genre: '',
            vote_average: '',
            tagline: '',
            runtime: '',
            overview: '',
        },
    };

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<AssetInfo {...props} />);
            expect(component).toMatchSnapshot();
        });

        it('renders for mobile', () => {
            const component = shallow(<AssetInfo {...props} isMobile />);

            expect(component).toMatchSnapshot();
        });

    });
});
