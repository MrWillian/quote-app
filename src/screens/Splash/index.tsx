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
    getUnverifiedAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUnverifiedAccount = async () => {
    return new Promise(async () => {
      const unverifiedAccountEmail = await AsyncStorage.getItem(
        'UNVERIFIED_ACCOUNT_EMAIL',
      );
      if (unverifiedAccountEmail) {
        setTimeout(() => navigation.navigate('ConfirmationCode'), 2000);
      } else {
        setTimeout(() => navigation.navigate('SignIn'), 6000);
      }
    });
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
