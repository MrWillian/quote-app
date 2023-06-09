import 'react-native';
import {USER_ID} from '../../../env-vars';
import {sanitizeQuoteDataToSave} from '../../utils';
import {registerQuote} from '../../lib/quotes/registerQuote';

describe('Register Quote', () => {
  const payload = {
    title: 'New Test 1',
    description: 'New Test description',
    date: new Date(),
    created_at: new Date(),
    updated_at: null,
  };

  const sanitizedData = sanitizeQuoteDataToSave(payload, USER_ID);

  it('should return sanitized object data from sanitizeQuoteDataToSave util function', () => {
    expect(sanitizedData).toHaveProperty('id');
    expect(sanitizedData).toMatchObject({title: 'New Test 1'});
  });

  it('should register a quote on admin user using the lib registerQuote function', async () => {
    const result = await registerQuote(sanitizedData).then(
      response => response,
    );
    expect(result).toMatchObject({status: '200'});
  });
});
