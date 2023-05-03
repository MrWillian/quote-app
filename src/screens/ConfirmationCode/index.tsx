import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mainScreenProp} from '../../routes/types';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

export const ConfirmationCode = () => {
  const [code, setCode] = useState<string>('');
  const [unverifiedAccountEmail, setUnverifiedAccountEmail] = useState<
    string | null
  >('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const {confirmAccount, resendConfirmationCode} = useAuth();
  const navigation = useNavigation<mainScreenProp>();
  const {t} = useTranslation();

  useEffect(() => {
    getUnverifiedAccountEmail();
  }, []);

  const getUnverifiedAccountEmail = async () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const unverifiedAccountEmail = await AsyncStorage.getItem(
      'UNVERIFIED_ACCOUNT_EMAIL',
    );
    setUnverifiedAccountEmail(unverifiedAccountEmail);
  };

  const handleChange = (value: string) => setCode(prev => prev + value);

  const handleVerifyCode = async () => {
    setIsSubmitting(true);
    await confirmAccount(code)
      .then(result => {
        if (result.type === 'success') {
          navigation.navigate('Dashboard');
        } else if (result.type === 'redirect') {
          navigation.navigate('SignIn');
        }
        setIsSubmitting(false);
      })
      .catch(error => {
        setIsSubmitting(false);
        Alert.alert(error.type, error.message);
      });
  };

  const handleResendConfirmationCode = async () => {
    await resendConfirmationCode()
      .then(result => {
        Alert.alert(
          t('success'),
          `${t('check_your_email')} ${result.CodeDeliveryDetails.Destination}`,
        );
      })
      .catch(error => {
        Alert.alert(error.type, error.message);
      });
  };

  return (
    <Container>
      <QuoteLogo />
      <Title>{t('please_check_you_email')}</Title>
      <Subtitle>{t('we_send_a_email')}</Subtitle>
      <EmailLabel>{unverifiedAccountEmail}</EmailLabel>
      <Form>
        <NextTextInput
          noOfTextInput={6}
          textInputStyle={styles.inputStyle}
          parentViewStyle={styles.parentInputStyle}
          onChangeValue={(_, value) => handleChange(value)}
        />
        <ResendContainer>
          <ResendLabel>{t('you_receive_it')}</ResendLabel>
          <ResendLinkContainer onPress={handleResendConfirmationCode}>
            <ResendLinkText>{t('resend')}</ResendLinkText>
          </ResendLinkContainer>
        </ResendContainer>
        <Button
          title={t('verify')}
          onPress={handleVerifyCode}
          isSubmitting={isSubmitting}
        />
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
