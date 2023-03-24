import React from 'react';
import FadeInView from './FadeInView';
import {Container, Title, Logo, Loading} from './style';

export const Splash = () => {
  return (
    <Container>
      <FadeInView>
        <Logo source={require('../../assets/images/QuoteApp.png')} />
        <Title>Welcome</Title>
        <FadeInView duration={10000}>
          <Loading size="large" color="#5c5091" />
        </FadeInView>
      </FadeInView>
    </Container>
  );
};
