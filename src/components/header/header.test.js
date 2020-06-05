import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../utils';

/* Functional component testing */
const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {
    
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('should render without any errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        /* prints testing DOM on console 
        console.log(wrapper.debug()); */
        expect(wrapper.length).toBe(1);
    });
})