import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RegistrationScreen4 from '../registerScreen4';

describe('RegistrationScreen4', () => {
    test('RegistrationScreen4 snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<RegistrationScreen4/>);
        expect(snapshot).toMatchSnapshot();
    });
});