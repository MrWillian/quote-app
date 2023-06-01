import React, {useEffect} from 'react';
import {Link, useNavigation} from '@react-navigation/native';
import {Button, QuoteLogo, TextInput} from '../../components';
import {Container, Form, Inputs, Title} from './style';
import {useSignInForm} from './useSignInForm';
import useAuth from '../../hooks/useAuth';
import {mainScreenProp} from '../../routes/types';
import {Alert} from 'react-native';
import {useTranslation} from 'react-i18next';

export const SignIn = () => {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: {isSubmitting, errors},
  } = useSignInForm();
  const {signIn} = useAuth();
  const {t} = useTranslation();
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  const onSubmit = async (data: any) => {
    const result = await signIn(data);
    if (result.type === 'success') {
      Alert.alert(t('success'), result.message);
      reset({email: '', password: ''});
      navigation.navigate('Dashboard');
      return;
    }
    Alert.alert(t('error'), result.message);
  };

  return (
    <Container>
      <QuoteLogo />
      <Title>{t('hello')}</Title>
      <Form>
        <Inputs>
          <TextInput
            id="email"
            label={t('email')}
            error={errors?.email}
            onChangeText={text => setValue('email', text)}
          />
          <TextInput
            id="password"
            label={t('password')}
            secureTextEntry={true}
            error={errors?.password}
            onChangeText={text => setValue('password', text)}
          />
        </Inputs>
        <Link
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: 'white',
            textDecorationLine: 'underline',
            fontFamily: 'NunitoSans',
          }}
          to="/SignUp"
        >
          {t('need_an_account')}
        </Link>
        <Button
          onPress={handleSubmit(onSubmit)}
          title={t('signin')}
          isSubmitting={isSubmitting}
        />
      </Form>
    </Container>
  );
};
