import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, string} from 'yup';
import i18n from 'i18next';

export type UserSignInProps = {
  email?: string;
  password?: string;
};

const schema = object().shape({
  email: string()
    .required(i18n.t('required_email') ?? '')
    .email(i18n.t('valid_email') ?? ''),
  password: string()
    .required(i18n.t('required_password') ?? '')
    .min(8, i18n.t('valid_password') ?? ''),
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
