import React from 'react';
import {Button, QuoteList, SearchBar} from '../../components';
import {
  Container,
  RegisterContainer,
  RegisterLabel,
  Subtitle,
  Title,
} from './style';

export const Dashboard = () => {
  return (
    <Container>
      <Title>Hey!!</Title>
      <Subtitle>Did You Forget Something?</Subtitle>

      <SearchBar />

      <QuoteList />

      <RegisterContainer>
        <RegisterLabel>Register Before You Forget! ;)</RegisterLabel>
        <Button title="Register" />
      </RegisterContainer>
    </Container>
  );
};
