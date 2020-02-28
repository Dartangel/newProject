import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RegistrationScreen2 from '../registerScreen2';

describe('RegistrationScreen2', () => {
    test('RegistrationScreen2 snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<RegistrationScreen2/>);
        expect(snapshot).toMatchSnapshot();
    });
});