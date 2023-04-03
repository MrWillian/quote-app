import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {ConfirmationCode} from '../../screens';

describe('ConfirmationCode', () => {
  it('renders the screen', () => {
    renderer.create(<ConfirmationCode />);
  });
});
