import React from 'react';
import FadeInView from './FadeInView';
import {Container, Title, Logo} from './style';

export const Splash = () => {
  return (
    <Container>
      <FadeInView>
        <Logo source={require('../../assets/images/QuoteApp.png')} />
        <Title>Welcome</Title>
      </FadeInView>
    </Container>
  );
};
