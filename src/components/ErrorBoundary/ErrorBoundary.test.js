import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { shallow } from 'enzyme';

describe('ErrorBoundary.js', () => {

    const Something = () => null;
    const error = new Error('test');

    describe('should render', () => {


        it('when the error occured', () => {

            const component = shallow(<ErrorBoundary><Something /></ErrorBoundary>);
            component.find(Something).simulateError(error);

            expect(component.find('h1').lenght).toEqual(1);  
        });
    });
});
