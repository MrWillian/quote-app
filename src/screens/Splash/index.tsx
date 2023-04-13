import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {QuoteLogo} from '../../components';
import {mainScreenProp} from '../../routes/MainStack';
import FadeInView from './FadeInView';
import {Container, Title, Loading} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Splash = () => {
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    handleInitialChecks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInitialChecks = async () => {
    const token = await getRefreshToken();
    if (token) {
      setTimeout(() => navigation.navigate('Dashboard'), 3000);
      return;
    }
    const unverifiedAccount = await getUnverifiedAccount();
    if (unverifiedAccount) {
      setTimeout(() => navigation.navigate('ConfirmationCode'), 2000);
      return;
    } else {
      setTimeout(() => navigation.navigate('SignIn'), 6000);
      return;
    }
  };

  const getRefreshToken = async () => {
    const token = await AsyncStorage.getItem('REFRESH_TOKEN');
    return token;
  };

  const getUnverifiedAccount = async () => {
    const unverifiedAccountEmail = await AsyncStorage.getItem(
      'UNVERIFIED_ACCOUNT_EMAIL',
    );
    return unverifiedAccountEmail;
  };

  return (
    <Container>
      <FadeInView>
        <QuoteLogo />
        <Title>Welcome</Title>
        <FadeInView duration={10000}>
          <Loading size="large" color="#5c5091" />
        </FadeInView>
      </FadeInView>
    </Container>
  );
};
