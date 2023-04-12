import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, QuoteList, SearchBar} from '../../components';
import {
  Container,
  RegisterContainer,
  RegisterLabel,
  Subtitle,
  Title,
} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mainScreenProp} from '../../routes/MainStack';

export const Dashboard = () => {
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    handleToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToken = async () => {
    const token = await AsyncStorage.getItem('REFRESH_TOKEN');
    if (!token) {
      navigation.goBack();
    }
  };

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
