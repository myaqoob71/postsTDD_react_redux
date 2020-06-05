import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr, checkProps } from '../../utils';

/* Class component testing */
const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {

    /* Nested describe functions */
    describe('Checking prop types', () => {
        it('should not throw warnings', () => {
            const expectedProps = {
                header: "Test header",
                desc: "Test desc",
                tempArr: [{
                    fName: "Test fname",
                    lName: "Test lname",
                    email: "test@gmail.com",
                    age: 28,
                    onlineStatus: false

                }]
            };
            const propsErr = checkProps(Headline, expectedProps);
            /*  use JEST's expect method along with a "matcher" function to assert something about a value */
            expect(propsErr).toBeUndefined();
        });
    });

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