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
       beforeEach(() => {
           const props = {
            buttonText: 'testButton',
            emitEvent: () => {}
           };
           wrapper = shallow(<Button {...props} />);
       }); 
       it('Should a render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
       });
    });
});