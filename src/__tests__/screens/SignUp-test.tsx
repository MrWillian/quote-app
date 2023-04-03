import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {SignUp} from '../../screens';

describe('SignUp', () => {
  it('renders the screen', () => {
    renderer.create(<SignUp />);
  });
});
