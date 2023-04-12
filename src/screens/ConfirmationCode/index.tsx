import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, QuoteLogo} from '../../components';
import NextTextInput from 'react-native-next-input';
import {
  Container,
  EmailLabel,
  Form,
  ResendContainer,
  ResendLabel,
  ResendLinkText,
  ResendLinkContainer,
  Subtitle,
  Title,
} from './style';
import useAuth from '../../hooks/useAuth';

export const ConfirmationCode = () => {
  const handleChange = (value: string) => console.log(value);
  const {unverifiedAccount} = useAuth();

  return (
    <Container>
      <QuoteLogo />
      <Title>Please, check your email!!</Title>
      <Subtitle>We Send a Email To</Subtitle>
      <EmailLabel>{unverifiedAccount.email}</EmailLabel>
      <Form>
        <NextTextInput
          noOfTextInput={6}
          textInputStyle={styles.inputStyle}
          parentViewStyle={styles.parentInputStyle}
          onChangeValue={(_, value) => handleChange(value)}
        />
        <ResendContainer>
          <ResendLabel>You do not receive?</ResendLabel>
          <ResendLinkContainer>
            <ResendLinkText>Resend</ResendLinkText>
          </ResendLinkContainer>
        </ResendContainer>
        <Button title="Verify" />
      </Form>
    </Container>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: '15%',
    backgroundColor: '#FFF',
    margin: 2,
    borderRadius: 5,
    elevation: 2,
    fontSize: 24,
    textAlign: 'center',
  },
  parentInputStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
