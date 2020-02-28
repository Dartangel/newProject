import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import RegistrationScreen1 from '../registerScreen';

describe('RegistrationScreen1', () => {
    test('RegistrationScreen1 snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<RegistrationScreen1/>);
        expect(snapshot).toMatchSnapshot();
    });
});