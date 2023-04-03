import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {TextInput} from '../../components';

describe('TextInput', () => {
  it('renders the component', () => {
    renderer.create(<TextInput />);
  });
});
