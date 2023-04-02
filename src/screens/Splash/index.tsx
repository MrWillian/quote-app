import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {QuoteLogo} from '../../components';
import {mainScreenProp} from '../../routes/MainStack';
import FadeInView from './FadeInView';
import {Container, Title, Loading} from './style';

export const Splash = () => {
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 6000);
  }, [navigation]);

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
