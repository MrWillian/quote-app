import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, ref, string} from 'yup';
import i18n from 'i18next';

export type UserSignUpProps = {
  givenName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

let schema = object().shape({
  givenName: string()
    .required(i18n.t('required_name') ?? '')
    .min(3, i18n.t('minimum_characters_name') ?? ''),
  email: string()
    .required(i18n.t('required_email') ?? '')
    .email(i18n.t('valid_email') ?? ''),
  password: string()
    .required(i18n.t('required_password') ?? '')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.$%^&*])(?=.{8,})/,
      i18n.t('valid_password') ?? '',
    ),
  confirmPassword: string().oneOf(
    [ref('password')],
    i18n.t('valid_confirm_password') ?? '',
  ),
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
