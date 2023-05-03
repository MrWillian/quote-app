import React, {useEffect} from 'react';
import {Button, TextInput} from '../../components';
import {Container, Form, Subtitle, Title} from './style';
import {registerQuote} from '../../lib/quotes/registerQuote';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {mainScreenProp} from '../../routes/types';
import {USER_ID} from '../../../env-vars';
import {sanitizeQuoteDataToSave} from '../../utils';
import {useRegisterQuoteForm} from './useRegisterQuoteForm';
import useQuotes from '../../hooks/useQuotes';
import {useTranslation} from 'react-i18next';

export const RegisterQuote = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: {isSubmitting, errors},
  } = useRegisterQuoteForm();
  const {addQuote} = useQuotes();
  const {t} = useTranslation();
  const navigation = useNavigation<mainScreenProp>();

  useEffect(() => {
    register('title');
    register('description');
  }, [register]);

  const onSubmit = async (fields: any) => {
    fields.date = new Date();
    const data = sanitizeQuoteDataToSave(fields, USER_ID);
    await registerQuote(data)
      .then(response => {
        Alert.alert(t('success'), response.data);
        addQuote(data);
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        Alert.alert(t('error'), error.message);
      });
  };

  return (
    <Container>
      <Title>{t('register')}!!</Title>
      <Subtitle>{t('write_something')}</Subtitle>

      <Form>
        <TextInput
          id="title"
          label={t('title')}
          error={errors?.title}
          showErrorMessage={true}
          onChangeText={text => setValue('title', text)}
        />
        <TextInput
          id="description"
          label={t('description')}
          error={errors?.description}
          showErrorMessage={true}
          multiline={true}
          numberOfLines={4}
          onChangeText={text => setValue('description', text)}
        />

        <Button
          title={t('register')}
          onPress={handleSubmit(onSubmit)}
          isSubmitting={isSubmitting}
        />
      </Form>
    </Container>
  );
};
