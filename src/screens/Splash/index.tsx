import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {QuoteLogo} from '../../components';
import {mainScreenProp} from '../../routes/MainStack';
import FadeInView from './FadeInView';
import {Container, Title, Loading} from './style';
import {useAuthenticatedUser} from '../../hooks';
import {UNVERIFIED_ACCOUNT_EMAIL, retrieveData} from '../../utils';
import {useTranslation} from 'react-i18next';

export const Splash = () => {
  const [getAuthenticatedUser] = useAuthenticatedUser();
  const navigation = useNavigation<mainScreenProp>();
  const {t} = useTranslation();

  useEffect(() => {
    handleInitialChecks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInitialChecks = async () => {
    handleUnverifiedAccount();
    handleCurrentUser();
  };

  const handleCurrentUser = () => {
    if (!getAuthenticatedUser()) {
      setTimeout(() => navigation.navigate('SignIn'), 6000);
    }
  };

  const handleUnverifiedAccount = async () => {
    const unverifiedAccountEmail = await retrieveData(UNVERIFIED_ACCOUNT_EMAIL);
    if (unverifiedAccountEmail) {
      setTimeout(() => navigation.navigate('ConfirmationCode'), 2000);
    }
  };

  return (
    <Container>
      <FadeInView>
        <QuoteLogo />
        <Title>{t('welcome')}</Title>
        <FadeInView duration={10000}>
          <Loading size="large" color="#5c5091" />
        </FadeInView>
      </FadeInView>
    </Container>
  );
};
