import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RegistrationScreen5 from '../registerScreen5';

describe('RegistrationScreen5', () => {
    test('RegistrationScreen5 snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<RegistrationScreen5/>);
        expect(snapshot).toMatchSnapshot();
    });
});