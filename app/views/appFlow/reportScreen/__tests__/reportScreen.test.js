import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ReportScreen from '../reportScreen';

describe('ReportScreen', () => {
    test('ReportScreen snapshot', () => {
        const renderer = new ShallowRenderer();
        const snapshot = renderer.render(<ReportScreen/>);
        expect(snapshot).toMatchSnapshot();
    });
});