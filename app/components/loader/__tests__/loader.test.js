import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Loader from '../index';

describe('Loader', () => {
    test('Loader snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<Loader />);
        expect(snapshot).toMatchSnapshot();
    });
});