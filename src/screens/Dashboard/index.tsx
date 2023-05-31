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
import {useLogout} from '../../hooks';
import {useTranslation} from 'react-i18next';
import {mainScreenProp} from '../../routes/types';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const adUnitId = __DEV__
  ? TestIds.BANNER
  : 'ca-app-pub-2147711301878242/4800421336';

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
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </Container>
  );
};
