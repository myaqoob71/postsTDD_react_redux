import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../src/utils';
import App from './app';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store = {store} />).childAt(0).dive();
    // console.log(wrapper.debug());
    return wrapper;
};

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: "Test title 1",
                body: "Test desc 1"
            },{
                title: "Test title 2",
                body: "Test desc 2"
            },{
                title: "Test title 3",
                body: "Test desc 3"
            }]
        };
        wrapper = setUp(initialState);
    });
    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });
});