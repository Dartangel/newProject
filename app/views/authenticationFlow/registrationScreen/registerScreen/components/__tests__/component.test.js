import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TextInputs from '../index';

describe('TextInputs', () => {
    test('TextInputs snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<TextInputs />);
        expect(snapshot).toMatchSnapshot();
    });
});