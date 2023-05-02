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
import {useTranslation} from 'react-i18next';

export const Dashboard = () => {
  const navigation = useNavigation<mainScreenProp>();
  const [logout] = useLogout();
  const {t} = useTranslation();

  const redirectToRegisterQuote = () => navigation.navigate('RegisterQuote');

  const handleLogout = () => logout();

  return (
    <Container>
      <Header>
        <Title>{t('hey')}</Title>
        <LogOutButton onPress={handleLogout} />
      </Header>
      <Subtitle>{t('forget_something')}</Subtitle>
      <SearchBar />
      <QuoteList />
      <RegisterContainer>
        <RegisterLabel>{t('register_before_forget')}</RegisterLabel>
        <Button title={t('register')} onPress={redirectToRegisterQuote} />
      </RegisterContainer>
    </Container>
  );
};
