import React, {useState, useEffect} from 'react';
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
import {getQuotesList} from '../../lib/quotes/listQuotes';
import {Alert} from 'react-native';
import {useCurrentUser, useLogout} from '../../hooks';

export const Dashboard = () => {
  const [quotes, setQuotes] = useState([]);
  const navigation = useNavigation<mainScreenProp>();
  const [currentUser] = useCurrentUser();
  const [logout] = useLogout();

  useEffect(() => {
    getQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectToRegisterQuote = () => navigation.navigate('RegisterQuote');

  const handleLogout = () => logout();

  const getQuotes = async () => {
    const username = currentUser?.getUsername() ?? '';
    await getQuotesList(username)
      .then(result => {
        if (result.data) {
          setQuotes(result.data.Items);
        }
      })
      .catch(error => {
        Alert.alert('Error', error.errorMessage);
      });
  };

  return (
    <Container>
      <Header>
        <Title>Hey!!</Title>
        <LogOutButton onPress={handleLogout} />
      </Header>
      <Subtitle>Did You Forget Something?</Subtitle>
      <SearchBar />
      <QuoteList quotes={quotes} />
      <RegisterContainer>
        <RegisterLabel>Register Before You Forget! ;)</RegisterLabel>
        <Button title="Register" onPress={redirectToRegisterQuote} />
      </RegisterContainer>
    </Container>
  );
};
