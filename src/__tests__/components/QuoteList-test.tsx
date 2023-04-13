import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {QuoteList} from '../../components';

describe('QuoteList', () => {
  it('renders the component', () => {
    renderer.create(<QuoteList />);
  });
});
