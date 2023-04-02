import React from 'react';
import {Button, TextInput} from '../../components';
import {Container, Form, Subtitle, Title} from './style';

export const RegisterQuote = () => {
  return (
    <Container>
      <Title>Register!!</Title>
      <Subtitle>Write Something to Remember...</Subtitle>

      <Form>
        <TextInput label="Title" />
        <TextInput label="Description" multiline={true} numberOfLines={4} />

        <Button label="Register" />
      </Form>
    </Container>
  );
};
