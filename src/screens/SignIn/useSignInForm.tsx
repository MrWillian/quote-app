import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, string} from 'yup';

export type UserSignInProps = {
  email?: string;
  password?: string;
};

const schema = object().shape({
  email: string()
    .required('O email é obrigatório')
    .email('Digite um email válido'),
  password: string()
    .required('A senha é obrigatória')
    .min(8, 'A senha deve conter pelo menos 8 dígitos'),
});

export const useSignInForm = () =>
  useForm<UserSignInProps>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
