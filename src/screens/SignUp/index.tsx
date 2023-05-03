import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, QuoteLogo, TextInput} from '../../components';
import {Container, Form, Inputs, Title} from './style';
import {useSignUpForm} from './useSignUpForm';
import useAuth from '../../hooks/useAuth';
import {Alert} from 'react-native';
import {mainScreenProp} from '../../routes/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

export const SignUp = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: {isSubmitting, errors},
  } = useSignUpForm();
  const {signUp} = useAuth();
  const {t} = useTranslation();
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    handleUnverifiedAccount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    register('givenName');
    register('email');
    register('password');
    register('confirmPassword');
  }, [register]);

  const handleUnverifiedAccount = async () => {
    const emailAccount = await AsyncStorage.getItem('UNVERIFIED_ACCOUNT_EMAIL');
    if (emailAccount) {
      navigation.navigate('ConfirmationCode');
    }
  };

  const onSubmit = async (data: any) => {
    await signUp(data)
      .then(response => {
        Alert.alert(t('success'), response.message);
        navigation.navigate('ConfirmationCode');
      })
      .catch(error => {
        Alert.alert(t('error'), error.message);
      });
  };

  return (
    <Container>
      <QuoteLogo />
      <Title>{t('create_account')}</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Inputs>
          <TextInput
            id="givenName"
            label={t('name')}
            error={errors?.givenName}
            showErrorMessage={true}
            onChangeText={text => setValue('givenName', text)}
          />
          <TextInput
            id="email"
            label={t('email')}
            error={errors?.email}
            showErrorMessage={true}
            onChangeText={text => setValue('email', text)}
          />
          <TextInput
            id="password"
            label={t('password')}
            secureTextEntry={true}
            error={errors?.password}
            showErrorMessage={true}
            onChangeText={text => setValue('password', text)}
          />
          <TextInput
            id="confirmPassword"
            label={t('confirm_password')}
            secureTextEntry={true}
            error={errors?.confirmPassword}
            showErrorMessage={true}
            onChangeText={text => setValue('confirmPassword', text)}
          />
        </Inputs>
        <Button
          title={t('signup')}
          onPress={handleSubmit(onSubmit)}
          isSubmitting={isSubmitting}
        />
      </Form>
    </Container>
  );
};
