import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, ref, string} from 'yup';

export type UserSignUpProps = {
  givenName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

let schema = object().shape({
  givenName: string()
    .required('O nome é obrigatório!')
    .min(3, 'O nome deve conter pelo menos 3 caracteres!'),
  email: string()
    .required('O email é obrigatório!')
    .email('Digite um email válido'),
  password: string()
    .required('A senha é obrigatória')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.$%^&*])(?=.{8,})/,
      `The password is required and must contain at least 8 characters: 
      * a number
      * a special character (!@#$%^&.*)
      * a uppercase latter and a lowercase latter`,
    ),
  confirmPassword: string().oneOf([ref('password')], 'As senhas não conferem!'),
});

export const useSignUpForm = () =>
  useForm<UserSignUpProps>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      givenName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
