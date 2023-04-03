import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {Button} from '../../components';

describe('Button', () => {
  it('renders the component', () => {
    renderer.create(<Button label="Test" />);
  });

  it('renders the correct text', () => {
    const value = 'Test';
    const component = renderer.create(<Button label="Test" />);
    expect(component.root.props.label).toEqual(value);
  });
});
