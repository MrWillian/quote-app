import React from 'react';
import {Container, Label} from './styles';

type Props = {
  label: string;
};

export const Button = ({label}: Props) => (
  <Container>
    <Label>{label}</Label>
  </Container>
);
