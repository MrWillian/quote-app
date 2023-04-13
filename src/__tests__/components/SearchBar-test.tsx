import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {SearchBar} from '../../components';

describe('SearchBar', () => {
  it('renders the component', () => {
    renderer.create(<SearchBar />);
  });
});
