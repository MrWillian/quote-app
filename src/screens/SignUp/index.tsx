import React, {useEffect} from 'react';
import {Button, QuoteLogo, TextInput} from '../../components';
import {Container, Form, Inputs, Title} from './style';
import {useSignUpForm} from './useSignUpForm';

export const SignUp = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useSignUpForm();

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <QuoteLogo />
      <Title>Create Your Account!!</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Inputs>
          <TextInput
            id="name"
            label="Name"
            error={errors?.name}
            onChangeText={text => setValue('name', text)}
          />
          <TextInput
            id="email"
            label="Email"
            error={errors?.email}
            onChangeText={text => setValue('email', text)}
          />
          <TextInput
            id="password"
            label="Password"
            secureTextEntry={true}
            error={errors?.password}
            onChangeText={text => setValue('password', text)}
          />
          <TextInput
            id="confirmPassword"
            label="Confirm Password"
            secureTextEntry={true}
            error={errors?.confirmPassword}
            onChangeText={text => setValue('confirmPassword', text)}
          />
        </Inputs>
        <Button label="Sign Up" />
      </Form>
    </Container>
  );
};
