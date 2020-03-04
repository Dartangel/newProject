import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NextButton from '../index';

describe('NextButton', () => {
    test('NextButton snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<NextButton />);
        expect(snapshot).toMatchSnapshot();
    });
});