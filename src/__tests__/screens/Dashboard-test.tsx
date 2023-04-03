import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {Dashboard} from '../../screens';

describe('Dashboard', () => {
  it('renders the screen', () => {
    renderer.create(<Dashboard />);
  });
});
