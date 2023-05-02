import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, string} from 'yup';
import i18n from 'i18next';

type RegisterQuoteProps = {
  title: string;
  description: string;
};

let schema = object().shape({
  title: string()
    .required(i18n.t('required_title') ?? '')
    .min(3, i18n.t('minimum_characters_title') ?? ''),
  description: string()
    .required(i18n.t('required_description') ?? '')
    .min(5, i18n.t('minimum_characters_description') ?? ''),
});

export const useRegisterQuoteForm = () =>
  useForm<RegisterQuoteProps>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      description: '',
    },
  });
