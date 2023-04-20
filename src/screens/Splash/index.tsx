import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {QuoteLogo} from '../../components';
import {mainScreenProp} from '../../routes/MainStack';
import FadeInView from './FadeInView';
import {Container, Title, Loading} from './style';
import {useCurrentUser} from '../../hooks';
import {UNVERIFIED_ACCOUNT_EMAIL, retrieveData} from '../../utils';

export const Splash = () => {
  const [currentUser] = useCurrentUser();
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    handleInitialChecks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInitialChecks = async () => {
    handleCurrentUser();
    handleUnverifiedAccount();
  };

  const handleCurrentUser = () => {
    if (!currentUser) {
      setTimeout(() => navigation.navigate('SignIn'), 3000);
    }
  };

  const handleUnverifiedAccount = async () => {
    const unverifiedAccountEmail = await retrieveData(UNVERIFIED_ACCOUNT_EMAIL);
    if (unverifiedAccountEmail) {
      setTimeout(() => navigation.navigate('ConfirmationCode'), 2000);
      return;
    } else {
      setTimeout(() => navigation.navigate('SignIn'), 6000);
      return;
    }
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
