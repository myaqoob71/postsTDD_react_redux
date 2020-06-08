import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils';
import Button from './index';

describe('Button Component', () => {
    
    describe('Checking Props', () => {
        it('Should not throw warning', () => {
            const expectedProps = {
                buttonText: 'testButton',
                emitEvent: () => {}
            };
            const PropsErr = checkProps(Button, expectedProps);
            expect(PropsErr).toBeUndefined();
        });
    });
    describe('Renders a button', () => {
       let wrapper;
       let mockFunc;
       beforeEach(() => {
           /* creating a mock function */
           mockFunc = jest.fn();
           const props = {
            buttonText: 'testButton',
            emitEvent: mockFunc
           };
           wrapper = shallow(<Button {...props} />);
       }); 
       it('Should a render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
       });
       it('Should emit callback on click event', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            /* To check if click event is failing just comment below simulate function or make expect toBe 0 */
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);
       });
    });
});