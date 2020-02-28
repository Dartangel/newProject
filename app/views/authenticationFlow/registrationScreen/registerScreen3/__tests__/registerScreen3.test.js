import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RegistrationScreen3 from '../registerScreen3';

describe('RegistrationScreen3', () => {
    test('RegistrationScreen3 snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<RegistrationScreen3/>);
        expect(snapshot).toMatchSnapshot();
    });
});