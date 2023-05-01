import axios from 'axios';
import {Quote} from '../../utils';

export async function registerQuote(payload: Quote) {
  let status: string = '200';
  let data;
  let errorMessage: string | null = 'null';
  try {
    await axios({
      method: 'put',
      url: 'https://1ruz0p0nia.execute-api.us-east-1.amazonaws.com/quote',
      data: payload,
    }).then(response => {
      status = '200';
      data = response.data;
    });
  } catch (err: any) {
    status = '500';
    console.log(err);
    errorMessage = err.message;
  } finally {
    return {
      status,
      data,
      errorMessage,
    };
  }
}
