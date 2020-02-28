import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RegistrationScreen from '../registrationScreen';

describe('RegistrationScreen', () => {
    test('RegistrationScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<RegistrationScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});