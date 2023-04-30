import 'react-native';
import {USER_ID} from '../../../env-vars';
import {getQuotesList} from '../../lib/quotes/listQuotes';

describe('List Quotes', () => {
  it('checks if list quotes of admin user not is empty', async () => {
    const quotesList = await getQuotesList(USER_ID).then(result => {
      if (result.data) {
        return result.data.Items;
      }
    });
    expect(JSON.stringify(quotesList)).not.toBe('{}');
  });
});
