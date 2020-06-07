import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils';
import ListItems from './index';

describe('ListItems Component', () => {

    describe('Checking props', () => {
        it('Should not throw warning', () => {
            const expectedProps = {
                title: 'Test Title',
                desc: 'Test Description'
            };
            const PropsErr = checkProps(ListItems, expectedProps);
            expect(PropsErr).toBeUndefined();
        });
    });
    describe('Component render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Test Title',
                desc: 'Test Description'
            };
            wrapper = shallow(<ListItems {...props} />);
        });
        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'listItemsComponent');
            expect(component.length).toBe(1);
        });
        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });
        it('Should render a description', () => {
            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        });
    });
    describe('Component should not render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Test Description'
            };
            wrapper = shallow(<ListItems {...props} />);
        });
        it('Should not render the component', () => {
            const component = findByTestAttr(wrapper, 'listItemsComponent');
            expect(component.length).toBe(0);
        });
    });   
});