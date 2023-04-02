import React, {useEffect} from 'react';
import {Button, QuoteLogo, TextInput} from '../../components';
import {Container, Form, Inputs, Title} from './style';
import {useSignInForm} from './useSignInForm';

export const SignIn = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useSignInForm();

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <QuoteLogo />
      <Title>Hey, Hello!!</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
        <Button label="Sign In" />
      </Form>
    </Container>
  );
};
