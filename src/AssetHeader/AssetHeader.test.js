import React from 'react';
import { AssetHeader } from './AssetHeader';
import {shallow} from 'enzyme';

describe('AssetHeader.js', () => {

    const props = {
        asset: {
            poster_path: ''
        },
        handleClick: jest.fn(),
    };

    describe('renders', () => {

        it('renders for desktop', () => {
            const component = shallow(<AssetHeader {...props} />);

            expect(component).toMatchSnapshot();
        });

        it('renders for mobile', () => {
            const component = shallow(<AssetHeader {...props} isMobile />);

            expect(component).toMatchSnapshot();
        });
    });

    describe('handleClick', () => {

        it('test search button click event', () => {
        
            const component = shallow(<AssetHeader {...props} />);
    
            component.find('button').simulate('click');
            expect(props.handleClick.mock.calls.length).toEqual(1);
        });

    });
});
