import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {QuoteLogo} from '../../components';

describe('QuoteLogo', () => {
  it('renders the component', () => {
    renderer.create(<QuoteLogo />);
  });
});
