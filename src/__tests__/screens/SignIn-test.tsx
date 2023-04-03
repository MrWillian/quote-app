import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {SignIn} from '../../screens';

describe('SignIn', () => {
  it('renders the screen', () => {
    renderer.create(<SignIn />);
  });
});
