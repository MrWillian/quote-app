import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {object, string} from 'yup';

type RegisterQuoteProps = {
  title: string;
  description: string;
};

let schema = object().shape({
  title: string()
    .required('O titúlo é obrigatório!')
    .min(3, 'O titúlo deve conter pelo menos 3 caracteres!'),
  description: string().required('A descrição é obrigatória!'),
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
