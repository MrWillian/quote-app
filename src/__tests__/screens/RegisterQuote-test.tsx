import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {RegisterQuote} from '../../screens';

describe('RegisterQuote', () => {
  it('renders the screen', () => {
    renderer.create(<RegisterQuote />);
  });
});
