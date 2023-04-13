import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {DetailQuote} from '../../screens';

describe('DetailQuote', () => {
  it('renders the screen', () => {
    renderer.create(<DetailQuote />);
  });
});
