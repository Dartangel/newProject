import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { PlanSettings } from '../index';

describe('PlanSettings', () => {
    test('PlanSettings snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<PlanSettings />);
        expect(snapshot).toMatchSnapshot();
    });
});