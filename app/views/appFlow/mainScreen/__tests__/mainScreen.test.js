import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MainScreen from '../mainScreen';

describe('MainScreen', () => {
    test('MainScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<MainScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});