import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { FirstButtons } from '../index';

describe('FirstButtons', () => {
    test('FirstButtons snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<FirstButtons />);
        expect(snapshot).toMatchSnapshot();
    });
});