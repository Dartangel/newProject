import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ProfileScreen from '../profile';

describe('ProfileScreen', () => {
    test('ProfileScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<ProfileScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});