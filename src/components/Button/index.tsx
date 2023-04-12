import React from 'react';
import {ActivityIndicator, ButtonProps} from 'react-native';
import {Container, Label} from './styles';

type Props = {
  isSubmitting?: boolean;
} & ButtonProps;

export const Button = ({isSubmitting, ...props}: Props) => (
  <Container {...props}>
    {isSubmitting ? (
      <ActivityIndicator size="large" />
    ) : (
      <Label>{props.title}</Label>
    )}
  </Container>
);
