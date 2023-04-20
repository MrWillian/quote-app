import React, {useEffect} from 'react';
import {Link, useNavigation} from '@react-navigation/native';
import {Button, QuoteLogo, TextInput} from '../../components';
import {Container, Form, Inputs, Title} from './style';
import {useSignInForm} from './useSignInForm';
import useAuth from '../../hooks/useAuth';
import {mainScreenProp} from '../../routes/MainStack';
import {Alert} from 'react-native';

export const SignIn = () => {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: {isSubmitting, errors},
  } = useSignInForm();
  const {signIn} = useAuth();
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  const onSubmit = async (data: any) => {
    await signIn(data)
      .then(response => {
        Alert.alert('Success', response.message);
        reset({email: '', password: ''});
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <Container>
      <QuoteLogo />
      <Title>Hey, Hello!!</Title>
      <Form>
        <Inputs>
          <TextInput
            id="email"
            label="Email"
            error={errors?.email}
            onChangeText={text => setValue('email', text)}
          />
          <TextInput
            id="Password"
            label="Password"
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
          }}
          to="/SignUp"
        >
          Need an account?
        </Link>
        <Button
          onPress={handleSubmit(onSubmit)}
          title="Sign In"
          isSubmitting={isSubmitting}
        />
      </Form>
    </Container>
  );
};
