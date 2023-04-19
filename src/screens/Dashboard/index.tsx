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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mainScreenProp} from '../../routes/MainStack';
import {getQuotesList} from '../../lib/quotes/listQuotes';
import {Alert} from 'react-native';
import useAuthenticatedUser from '../../hooks/useAuthenticatedUser';
import useLogout from '../../hooks/useLogout';

export const Dashboard = () => {
  const [quotes, setQuotes] = useState([]);
  const navigation = useNavigation<mainScreenProp>();
  const [getAuthenticatedUser] = useAuthenticatedUser();
  const [logout] = useLogout();

  useEffect(() => {
    handleToken();
    getQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectToRegisterQuote = () => navigation.navigate('RegisterQuote');

  const handleLogout = () => logout();

  const handleToken = async () => {
    const token = await AsyncStorage.getItem('ACCESS_TOKEN');
    if (!token) {
      navigation.goBack();
    }
  };

  const getQuotes = async () => {
    const username = getAuthenticatedUser()?.getUsername() ?? '';
    await getQuotesList(username)
      .then(result => {
        setQuotes(result.data.Items);
      })
      .catch(error => {
        Alert.alert('Error', error);
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
