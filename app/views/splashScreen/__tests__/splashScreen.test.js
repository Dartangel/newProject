import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SplashScreen from '../splashScreen';

describe('SplashScreen', () => {
    test('SplashScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<SplashScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});