import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, LogOutButton, QuoteList, SearchBar} from '../../components';
import {
  Container,
  RegisterContainer,
  RegisterLabel,
  Subtitle,
  Title,
  Header,
} from './style';
import {mainScreenProp} from '../../routes/MainStack';
import {useLogout} from '../../hooks';

export const Dashboard = () => {
  const navigation = useNavigation<mainScreenProp>();
  const [logout] = useLogout();

  const redirectToRegisterQuote = () => navigation.navigate('RegisterQuote');

  const handleLogout = () => logout();

  return (
    <Container>
      <Header>
        <Title>Hey!!</Title>
        <LogOutButton onPress={handleLogout} />
      </Header>
      <Subtitle>Did You Forget Something?</Subtitle>
      <SearchBar />
      <QuoteList />
      <RegisterContainer>
        <RegisterLabel>Register Before You Forget! ;)</RegisterLabel>
        <Button title="Register" onPress={redirectToRegisterQuote} />
      </RegisterContainer>
    </Container>
  );
};
