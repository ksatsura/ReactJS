import React from 'react';
import AssetInfo from './AssetInfo.js';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';
import mockPoster from '../images/default.png';

describe('AssetInfo component', () => {

    let mockCallBack;
    let mockAsset;

    beforeAll(() => {
        mockCallBack = jest.fn();
        mockAsset = {
            title: '',
            releaseDate: '',
            genre: '',
            nomination: '',
            description: '',
            duration: '',
            rating: '',
        };
    });

    it('should be render correctly', () => {
        const component = shallow(<AssetInfo  posterUrl={mockPoster} handleBack={mockCallBack} asset={mockAsset}/>);

        expect(component).toMatchSnapshot();
    });

    it('test search button click event', () => {
        
        const component = shallow((<AssetInfo  posterUrl={mockPoster} handleBack={mockCallBack} asset={mockAsset}/>));

        component.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});
