import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, ErrorLabel, Input, Label} from './styles';
import {FieldError} from 'react-hook-form';

type Props = {
  label?: string | null;
  error?: Omit<FieldError, 'type'>;
  showErrorMessage?: boolean;
} & TextInputProps;

export const TextInput = ({
  label,
  error,
  showErrorMessage,
  ...props
}: Props) => (
  <Container>
    <Label>{label}</Label>
    <Input {...props} showBorder={error} />
    {showErrorMessage && !!error ? (
      <ErrorLabel>{error.message}</ErrorLabel>
    ) : (
      <></>
    )}
  </Container>
);
