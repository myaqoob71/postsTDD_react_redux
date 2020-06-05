import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr } from '../../utils';

/* Class component testing */
const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {

    /* Nested describe functions */
    describe('Has props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header : "Test header",
                desc : "Test description"
            };
            wrapper = setUp(props);
        });
        
        it('should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1);
        });

        it('should render header', () => {
            const headerElement = findByTestAttr(wrapper, 'header');
            expect(headerElement.length).toBe(1);
        });

        it('should render desc', () => {
            const descElement = findByTestAttr(wrapper, 'desc');
            expect(descElement.length).toBe(1);
        });

        
    });

    describe('Has no props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });

        it('should not render', () => {
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0);
        });
    });
})