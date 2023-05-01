import 'react-native';
import {USER_ID} from '../../../env-vars';
import {sanitizeQuoteDataToSave} from '../../utils';
import {registerQuote} from '../../lib/quotes/registerQuote';
import {deleteQuote} from '../../lib/quotes/deleteQuote';

describe('Delete Quote', () => {
  const payload = {
    id: '9d94437a-b7b2-48e0-b711-000000000000',
    title: 'Test to delete',
    description: 'Test to delete description',
    date: new Date(),
    created_at: new Date(),
    updated_at: null,
  };

  const sanitizedData = sanitizeQuoteDataToSave(payload, USER_ID);

  it('should create a quote with the specified id', async () => {
    const result = await registerQuote(sanitizedData).then(
      response => response,
    );
    expect(result).toMatchObject({status: '200'});
  });

  it('should delete the specified quote by gived id', async () => {
    const result = await deleteQuote(payload.id).then(response => response);
    expect(result).toMatchObject({status: '200'});
  });
});
